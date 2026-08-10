import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check if the URL already has a language (e.g., /en or /es)
  const pathnameHasLocale = pathname.startsWith("/en") || pathname.startsWith("/es");

  // 2. If they hit the base website (e.g., vireelagency.com/) with no language attached...
  if (!pathnameHasLocale && pathname === "/") {
    
    // Read the invisible language settings their browser sent us
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    // If their browser's primary language starts with "es" (es-ES, es-MX, etc.), pick Spanish. 
    // For literally everything else (French, English, German, etc.), default to English.
    const defaultLocale = acceptLanguage.startsWith('es') ? 'es' : 'en';

    // Instantly redirect them to their native layout!
    request.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

// Tell the proxy to ignore images, icons, and Next.js system files so it runs lightning fast
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg).*)",
  ],
};