import {
  authMiddleware,
  redirectToSignIn,
  clerkClient,
} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const publicRoutes = [
  '/',
  '/emergency(.*)',
  '/guides(.*)',
  '/solutions(.*)',
  '/pricing(.*)',
  '/login(.*)',
  '/register(.*)',
  '/about(.*)',
  '/contact(.*)',
  '/faq(.*)',
  '/forget-password(.*)',
  '/api(.*)',
];

export default authMiddleware({
  publicRoutes: publicRoutes,
  afterAuth: (auth, req) => {
    // Don't need to check auth for public routes

    const isAuthRoutes =
      req.nextUrl.pathname.startsWith('/login') ||
      req.nextUrl.pathname.startsWith('/register');

    if (auth.userId && isAuthRoutes) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
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
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
