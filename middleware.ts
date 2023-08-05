import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

const publicRoutes = [
  '/',
  '/emergency',
  '/pricing',
  '/login',
  '/register',
  '/about',
];

export async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // const session = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if user is signed in and the current path is / redirect the user to /account
  if (user && (pathName === '/login' || pathName === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // if user is not signed in and the current path is not public routes
  if (!user && !publicRoutes.includes(pathName)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/', '/dashboard', '/login', '/register'],
};
