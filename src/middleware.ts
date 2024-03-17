import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { isAuthenticated } from './lib/auth'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard') && !isAuthenticated()) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (!request.nextUrl.pathname.startsWith('/dashboard') && isAuthenticated()) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
