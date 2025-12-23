import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Liste des langues
  const locales = ['fr', 'ar', 'en'];

  // 2. Vérifier si l'URL commence déjà par une langue
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 3. IMPORTANT : On ignore les fichiers dans /public (images, logo, etc.)
  // Si c'est une image, on ne redirige pas.
  if (
    pathname.includes('.') || 
    pathname.startsWith('/api') || 
    pathname.startsWith('/_next')
  ) {
    return;
  }

  // 4. Redirection vers /fr si la langue manque
  if (pathnameIsMissingLocale) {
    const url = new URL(`/fr${pathname}`, request.url);
    return NextResponse.redirect(url);
  }
}

export const config = {
  // On filtre pour ne pas faire tourner le middleware sur les images
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};