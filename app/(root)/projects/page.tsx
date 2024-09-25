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
import NewProjectSheet from "@/components/NewProjectSheet";
import { Suspense } from "react";



export default function Page()
{
    return (
        <main>
            <div className="h-full w-full">
                <div className="flex flex-row items-center justify-between px-4">
                    <h1 className="text-2xl font-bold">Projects</h1>
                    <NewProjectSheet />
                </div>
                <Separator className="my-4"/>
                <Projects />
            </div>
        </main>
    );
}