import React from 'react'
import NewProject from './NewProject'

import { Button } from './ui/button'
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

export default function NewProjectSheet() {
    return (
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
    ); 
}
