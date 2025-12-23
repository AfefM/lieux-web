import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. On laisse passer les fichiers avec une extension (images, logo, etc.)
  if (pathname.includes('.')) {
    return NextResponse.next()
  }

  // 2. On définit les langues
  const locales = ['fr', 'ar', 'en']

  // 3. Si on est sur la racine "/" on va vers "/fr"
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/fr', request.url))
  }

  // 4. Vérifier si l'URL commence par une langue
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/fr${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  // On cible tout sauf les dossiers système et l'api
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|public).*)'],
}