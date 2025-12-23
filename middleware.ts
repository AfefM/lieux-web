import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 1. On définit les langues acceptées
  const locales = ['fr', 'ar', 'en']

  // 2. On ignore les fichiers (images, logo, favicons)
  if (pathname.includes('.') || pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  // 3. On vérifie si l'URL a déjà une langue (ex: /fr/...)
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // 4. Si la langue manque, on redirige vers /fr
  if (pathnameIsMissingLocale) {
    const locale = 'fr'
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }
}

export const config = {
  // On surveille tout sauf les dossiers internes
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|public).*)'],
}