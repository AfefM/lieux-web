import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Dans Next.js 16, on exporte une fonction nommée "proxy"
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Ignorer les fichiers avec extension (images, logo, favicon)
  if (pathname.includes('.')) {
    return NextResponse.next()
  }

  // 2. Redirection de la racine "/" vers "/fr"
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/fr', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // On surveille les routes principales
  matcher: ['/', '/fr', '/ar', '/en'],
}