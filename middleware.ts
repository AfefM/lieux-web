import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['fr', 'ar', 'en'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Vérifie si le chemin contient déjà une langue
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 2. Si pas de langue, on force la redirection vers /fr
  const locale = 'fr';
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  
  return NextResponse.redirect(url);
}

export const config = {
  // On ignore les fichiers statiques et techniques
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|public).*)',
  ],
};