import { authMiddleware, redirectToSignIn } from "@clerk/nextjs/server";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.cachedFixedWindow(10, "10s"),
  ephemeralCache: new Map(),
  analytics: true,
});

const handleRateLimiting = async (req: any, evt: NextFetchEvent) => {
  const ip = req.ip ?? "127.0.0.1";

  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    `ratelimit_middleware_${ip}`
  );

  console.log(success, pending, limit, reset, remaining);

  evt.waitUntil(pending);

  const res = success
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/api/blocked", req.url));

  res.headers.set("X-RateLimit-Limit", limit.toString());
  res.headers.set("X-RateLimit-Remaining", remaining.toString());
  res.headers.set("X-RateLimit-Reset", reset.toString());
};

const publicRoutes = [
  "/",
  "/emergency(.*)",
  "/guides(.*)",
  "/solutions(.*)",
  "/pricing(.*)",
  "/login(.*)",
  "/register(.*)",
  "/about(.*)",
  "/faq(.*)",
  "/forget-password(.*)",
  "/api(.*)",
];

export default authMiddleware({
  publicRoutes: publicRoutes,
  beforeAuth: async (req, evt) => {
    const res = await handleRateLimiting(req, evt);
    return res;
  },
  afterAuth: async (auth, req, evt) => {
    const res = await handleRateLimiting(req, evt);

    // Don't need to check auth for public routes
    const isAuthRoutes =
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register");

    if (auth.userId && isAuthRoutes) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (auth.isPublicRoute) {
      return NextResponse.next();
    }

    // If user tries to access a private route without being authenticated,
    // redirect them to the sign in page
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    return res;
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
