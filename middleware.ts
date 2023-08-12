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
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
