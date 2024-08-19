'use client'

import NewProject from "@/components/NewProject";
import { SessionProvider } from "next-auth/react";

export default function Page()
{
    return (
        <SessionProvider >
            <NewProject />
        </SessionProvider>
    );
}