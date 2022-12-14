import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {
  // Redirect if they don't have the appropriate role
  if (
    req.nextUrl.pathname.startsWith("/protected") &&
    req.nextauth.token?.role !== "ADMIN"
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/protected/:path*", "/nonAdminButSecure/:path*"],
};