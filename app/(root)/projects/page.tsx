import Link from "@/node_modules/next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Projects from "@/components/Projects";
import { SignInForm } from "@/components/SignInForm";
import NewProject from "@/components/NewProject";
import DatePicker from "@/components/DatePicker";
import SignUpForm from "@/components/SignUpForm";

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
                    <Projects />
                </div>
                <div>
                    
                </div>
            </div>
        </main>
    );
}