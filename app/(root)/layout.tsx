import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react"
import Layout from "@/components/Layout";
import { getServerSession } from "next-auth";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Layout />
      <main className="bg-background text-foreground dark:bg-background dark:text-foreground text-black h-full w-full pt-[4.5rem] pl-52 pr-4">
            {children}
      </main>
    </section>
  );
}
