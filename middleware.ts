// export { default } from "next-auth/middleware"

import type { NextRequest } from "next/server"
import type { JWT } from "next-auth/jwt"


export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|login|sign-up).*)',
    ],
}

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

