import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Task } from "@/@types"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
} 

export interface TaskInterface {
    id: string,
    ownerId: string,
    projectId: string,
    name: string,
    startDate: string,
    endDate: string,
    description: string,
    priority: string, 
    status: string
}

export interface ProjectInterface {
    id: string,
    ownerId: string,
    name: string,
    startDate: string,
    endDate: string,
    description: string,
    priority: string, 
    status: string,
    tasks: Task[],
}

export interface NewTaskProps {
    projectId: string;
    redirect: boolean;
  }