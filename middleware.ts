import {
  authMiddleware,
  redirectToSignIn,
  clerkClient,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.cachedFixedWindow(10, "10s"),
  ephemeralCache: new Map(),
  analytics: true,
});

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
  beforeAuth: (req) => {
    console.log("IP => ", req.ip);
  },
  afterAuth: (auth, req) => {
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
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
