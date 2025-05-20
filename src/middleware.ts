import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access")?.value;


  if (token && request.nextUrl.pathname === "/login") {
    const targetUrl = new URL(request.url);
    targetUrl.pathname = "/dashboard";
    return NextResponse.redirect(targetUrl);
  }

 
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    const targetUrl = new URL(request.url);
    targetUrl.pathname = "/login";
    return NextResponse.redirect(targetUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login/:path*", "/dashboard/:path*"],
};
