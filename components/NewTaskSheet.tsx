import React from 'react'
import NewTask from './NewTask';

import { Button } from './ui/button'
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

export default function NewTaskSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">New Task</Button>
            </SheetTrigger>
            <SheetContent style={{maxWidth: '28vw'}} side="left">
                <SheetHeader className="pb-4">
                    <SheetTitle className="text-3xl text-primary">Create a Task</SheetTitle>
                    <SheetDescription>
                        Tasks are easy to complete and make up the whole of the project.
                    </SheetDescription>
                </SheetHeader>
                <NewTask />
            </SheetContent>
        </Sheet>
    ); 
}
