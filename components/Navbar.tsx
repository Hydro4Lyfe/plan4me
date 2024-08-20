import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar()
{
    const session = useSession()

    return (
        <nav className="bg-background dark:bg-background text-foreground dark:text-foreground min-h-16 w-full fixed top-0 flex flex-row items-center justify-between px-6">
            <h1 className="text-5xl">
                Plan<span className="text-primary">4</span>Me
            </h1>
            <div className="flex flex-row-reverse items-center">
                
                <Button className="ml-3 px-3" variant='destructive' onClick={() => {signOut( { callbackUrl: '/login'})}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                </Button>
                <Image 
                    src={session.data?.user?.image || '@/public/user.svg' }
                    alt="User Profile Icon"
                    width="30"
                    height="30"
                    className="rounded-full ml-3 h-[30px] w-[30px]"
                />
                <h1>{session.data?.user?.name}</h1>
            </div>
            
        </nav>
    );

}