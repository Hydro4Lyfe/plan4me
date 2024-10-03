import React from 'react'
import NewTask from './NewTask'
import { NewTaskProps } from '@/lib/utils'
import { useState } from 'react'

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

export default function NewTaskSheet({ projectId, redirect }: NewTaskProps) {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button variant="outline">New Task</Button>
            </SheetTrigger>
            <SheetContent style={{maxWidth: '24vw'}} side="left">
                <SheetHeader className="pb-4">
                    <SheetTitle className="text-3xl font-bold text-primary">Create Your Next Task</SheetTitle>
                    <SheetDescription>
                        Tasks are small and easy to complete and make up projects
                    </SheetDescription>
                </SheetHeader>
                <NewTask redirect={redirect} projectId={projectId}/>
            </SheetContent>
        </Sheet>
    ); 
}