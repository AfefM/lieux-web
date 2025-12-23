import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. On laisse passer TOUS les fichiers avec une extension (images, favicons, etc.)
  if (pathname.includes('.')) {
    return NextResponse.next()
  }

  // 2. Si on est à la racine exacte "/" -> on redirige vers "/fr"
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/fr', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // On ne surveille QUE la racine et les pages, pas les dossiers système
  matcher: ['/', '/fr', '/ar', '/en'],
}