'use client'
import { useSession } from "next-auth/react";

export default function Settings()
{
    const session = useSession();
    return (
        <h1>
            {session.data?.user?.name}
        </h1>
    );
}