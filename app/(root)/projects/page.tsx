import Link from "@/node_modules/next/link";
import { Button } from "@/components/ui/button";

export default function Page()
{
    return (
        <main>
            <div className="h-full w-full">
                <div className="flex flex-row-reverse items-center justify-content px-4 py-2">
                    <Button variant="outline">
                        <Link href={"/projects/new"}>New Project</Link>
                    </Button>
                    
                </div>
                <div className="flex flex-col ">
                    <h1>Projects</h1>
                    <textarea rows={10} cols={100}></textarea>
                </div>
                <div>
                    
                </div>
            </div>
        </main>
    );
}