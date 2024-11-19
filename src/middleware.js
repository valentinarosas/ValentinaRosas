import { NextResponse } from "next/server";

export function middleware(request) {
  // Only run on the SCAD Pro X Universal content route
  if (request.nextUrl.pathname === "/projects/scad-pro-universal/content") {
    // Check if user is authenticated
    const isAuthenticated = request.cookies.get("scadProAuth");

    if (!isAuthenticated) {
      // Redirect to password page if not authenticated
      return NextResponse.redirect(new URL("/projects/scad-pro-universal/password", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/projects/scad-pro-universal/content",
};
