// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Middleware logic here
  const url = request.nextUrl.clone();

  // Example: Redirect if path is `/admin`
  if (url.pathname === '/admin') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next(); // Continue to the requested page
}

// Configure the matcher to only run middleware on specific paths
export const config = {
  matcher: ['/admin', '/dashboard/:path*'], // Specify exact paths or patterns
};