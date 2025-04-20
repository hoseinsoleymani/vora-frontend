import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access")?.value;
  if (token) {
    if (request.nextUrl.pathname === "/login") {
      const targetUrl = new URL(request.url);
      targetUrl.pathname = "/";
      return NextResponse.redirect(targetUrl);
    }
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/login/:path*"],
};
