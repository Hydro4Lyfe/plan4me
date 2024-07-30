
import { sidebarLinks } from "../lib/sidebarLinks";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "./ui/button";


export default function Sidebar() 
{
    return (
        <aside className="bg-background dark:bg-background text-foreground dark:text-foreground min-h-screen w-48 flex flex-col fixed top-0 mt-16 shadow-secondary shadow-sm">
            <div className="w-full flex flex-col gap-2">
                <Link href={"/"} className="text-xl pl-6 py-4 hover:bg-primary">Dashboard</Link> 
                <Link href={"/projects"} className="text-xl pl-6 py-4 hover:bg-primary">Projects</Link>
                <Link href={"/tasks"} className="text-xl pl-6 py-4 hover:bg-primary">Tasks</Link>
                <Link href={"/groups"} className="text-xl pl-6 py-4 hover:bg-primary">Groups</Link>
                <Link href={"/settings"} className="text-xl pl-6 py-4 hover:bg-primary">Settings</Link>
            </div>
        </aside>
    );
}