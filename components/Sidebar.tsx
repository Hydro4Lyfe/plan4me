
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { SidebarLink } from "@/@types";
import Image from "next/image";

import dashboard from "@/public/dashboard.svg"


export default function Sidebar() 
{
    const links = sidebarLinks

    const pathname = usePathname()
    const inactiveLink = "flex flex-row items-center gap-2 pl-4 py-4 text-xl hover:bg-primary hover:text-primary-foreground rounded-md"
    const activeLink = inactiveLink + " bg-secondary text-secondary-foreground"
    return (
        <aside className="bg-accent dark:bg-background text-foreground dark:text-foreground min-h-screen w-48 flex flex-col fixed top-0 mt-16">
            <div className="mx-3 w-full flex flex-col gap-2 text-foreground dark:text-foreground">
                {links.map( (link: SidebarLink) => (
                    <Link href={link.route} className={pathname === `${link.route}` ? activeLink : inactiveLink}>
                        <Image src={dashboard} width={20} height={20} alt={`${link.label} icon`}/>
                        {link.label}
                    </Link>
                ))}
            </div>
        </aside>
    );
}