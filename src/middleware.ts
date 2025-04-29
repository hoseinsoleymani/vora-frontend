import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access")?.value;
  if (token) {
    if (request.nextUrl.pathname === "/login") {
      const targetUrl = new URL(request.url);
      targetUrl.pathname = "/dashboard";
      return NextResponse.redirect(targetUrl);
    }
  } else {
    return NextResponse.next();
  }
  if (!token) {
    if (request.nextUrl.pathname === "/dashboard") {
      const targetUrl = new URL(request.url);
      targetUrl.pathname = "/login";
      return NextResponse.redirect(targetUrl);
    }
  }
}

export const config = {
  matcher: ["/login/:path*", "/dashboard/:path*"],
};
