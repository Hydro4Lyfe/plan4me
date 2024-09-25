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
            <SheetContent style={{maxWidth: '24vw'}} side="left">
                <SheetHeader className="pb-4">
                    <SheetTitle className="text-3xl font-bold text-primary">Create a Task</SheetTitle>
                    <SheetDescription>
                        Tasks make up projects or they can be small goals
                    </SheetDescription>
                </SheetHeader>
                <NewTask />
            </SheetContent>
        </Sheet>
    ); 
}
