import Tasks from "@/components/Tasks";

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
import NewTask from "@/components/NewTask";
import NewTaskSheet from "@/components/NewTaskSheet";

export default function Page()
{
    return (
        <main>
            <div className="h-full w-full">
                <div className="flex flex-row items-center justify-between px-4">
                    <h1 className="text-2xl font-bold">Tasks</h1>
                    <NewTaskSheet />
                </div>
                <Separator className="my-4"/>
                <Tasks />
            </div>
        </main>
    );
}