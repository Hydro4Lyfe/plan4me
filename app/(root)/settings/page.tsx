'use client'
import { SessionContext, SessionProvider, useSession } from "next-auth/react";
import Settings from "@/components/Settings";

export default function Page()
{
    return (
        <SessionProvider>
            <Settings />
        </SessionProvider>
    );
}