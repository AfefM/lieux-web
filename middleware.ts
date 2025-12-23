import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const locales = ['fr', 'ar', 'en']

  // 1. On ignore les fichiers statiques (images, favicons, etc.)
  // Si le chemin contient un point (ex: photo.jpg), on ne fait rien.
  if (pathname.includes('.') || pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // 2. Vérifier si l'URL commence déjà par une langue
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // 3. Rediriger vers /fr par défaut
  const url = request.nextUrl.clone()
  url.pathname = `/fr${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Le matcher doit être large, mais le code au-dessus filtrera les erreurs
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}