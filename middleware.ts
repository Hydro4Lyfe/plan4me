// export { default } from "next-auth/middleware"
import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth/next";


export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|login|sign-up).*)',
    ],
}

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session = !!req.cookies.get("__Secure-next-auth.session-token") || !!req.cookies.get("next-auth.session-token")

  if (!session) {
    return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${path}`, req.url));
  }
  return NextResponse.next();
}

