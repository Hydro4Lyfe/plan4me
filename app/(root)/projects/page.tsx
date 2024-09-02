import Link from "@/node_modules/next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Projects from "@/components/Projects";
import DatePicker from "@/components/DatePicker";
import NewProject from "@/components/NewProject";



export default function Page()
{
    return (
        <main>
            <div className="h-full w-full">
                <div className="flex flex-row items-center justify-between px-4">
                    <h1 className="text-3xl font-bold">Projects</h1>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">New Project</Button>
                        </SheetTrigger>
                        <SheetContent style={{maxWidth: '24vw'}} side="left">
                            <SheetHeader className="pb-4">
                                <SheetTitle className="text-3xl font-bold text-primary">Create Your Next Project</SheetTitle>
                                <SheetDescription>
                                    Create a project to begin tracking and adding tasks
                                </SheetDescription>
                            </SheetHeader>
                            <NewProject />
                        </SheetContent>
                    </Sheet>
                </div>
                <Separator className="my-4"/>
                <Projects />
            </div>
        </main>
    );
}