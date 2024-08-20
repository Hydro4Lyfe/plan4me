import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { SidebarLink } from "@/@types";

export default function Sidebar() 
{
    const links = sidebarLinks

    const pathname = usePathname()
    const inactiveLink = "px-4 py-2 flex flex-row items-center gap-3 text-xl hover:bg-primary hover:text-primary-foreground rounded-md"
    const activeLink = inactiveLink + " bg-secondary text-secondary-foreground"
    return (
        <aside className="bg-accent dark:bg-background text-foreground dark:text-foreground min-h-screen w-48 flex flex-col fixed top-0 mt-16">
            <div className="w-full flex flex-col gap-4 px-2 text-foreground dark:text-foreground">
                {links.map( (link: SidebarLink) => (
                    <Link href={link.route} key={link.id} className={pathname === `${link.route}` ? activeLink : inactiveLink}>
                        <div  dangerouslySetInnerHTML={{__html: link.svg}} />
                        {link.label}
                    </Link>
                ))}
            </div>
        </aside>
    );
}