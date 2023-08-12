import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { useUser } from "./stores/user";

const publicRoutes = [
  "/",
  "/emergency",
  "/pricing",
  "/login",
  "/register",
  "/about",
  "/api/stripe/webhooks",
];

export default authMiddleware({
  publicRoutes: publicRoutes,
  afterAuth: (auth, req) => {
    // console.log(auth);
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
