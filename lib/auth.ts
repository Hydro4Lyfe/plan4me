import type { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";
import { NextRequest } from "next/server";
import prisma from "./db";

export const AuthOptions: NextAuthOptions = {    
  providers: [
        GithubProvider({
          id: "Github Login",
          clientId: process.env.GITHUB_ID as string,
          clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
          id: "Google Login",
          clientId: process.env.GOOGLE_ID as string,
          clientSecret: process.env.GOOGLE_SECRET as string,
        }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
      // session.user.id = user.id;
      // return session;
    }
  },
  session: {
    strategy: "database",
  }
}

