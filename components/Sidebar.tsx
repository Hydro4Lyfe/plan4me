import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { SidebarLink } from "@/@types";

export default function Sidebar() 
{
    const links = sidebarLinks
    const pathname = usePathname()
    const inactiveLink = "px-2 py-4 flex flex-row items-center gap-3 text-2sxl hover:bg-primary hover:text-primary-foreground rounded-lg"
    const activeLink = inactiveLink + " bg-secondary dark:bg-card text-primary hover:text-primary"
    return (
        <aside className="bg-background dark:bg-background text-foreground dark:text-foreground min-h-screen w-48 flex flex-col pt-2 fixed top-0 mt-16">
            <div className="w-full flex flex-col gap-4 px-2 text-foreground dark:text-foreground">
                { links.map( (link: SidebarLink) => (
                    (pathname === "/") ? 
                    <Link href={link.route} key={link.id} className={ pathname.includes(link.route) ? activeLink : inactiveLink }>
                        <div  dangerouslySetInnerHTML={{__html: link.svg}} />
                        {link.label}
                    </Link> 
                    : 
                    <Link href={link.route} key={link.id} className={ ((link.route.length > 1) && pathname.includes(link.route)) ? activeLink : inactiveLink }>
                        <div  dangerouslySetInnerHTML={{__html: link.svg}} />
                        {link.label}
                    </Link>
                ))}
            </div>
        </aside>
    );
}