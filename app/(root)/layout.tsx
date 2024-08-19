import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react"
import NavLayout from "@/components/Layout";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <NavLayout />
        <section className="bg-background text-foreground dark:bg-background dark:text-foreground text-black h-full w-full pt-[4.5rem] pl-52 pr-4">
              {children}
        </section>
    </main>
  );
}
