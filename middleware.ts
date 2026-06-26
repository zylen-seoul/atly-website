import { NextResponse, type NextRequest } from "next/server";

const localeSet = new Set(["ko", "en", "zh", "ja"]);

export function middleware(request: NextRequest) {
  const locale = request.nextUrl.pathname.split("/")[1];
  const requestHeaders = new Headers(request.headers);

  if (localeSet.has(locale)) {
    requestHeaders.set("x-atly-locale", locale);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|assets).*)"]
};
