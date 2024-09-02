import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
} 

export interface Project {
    id: string,
    ownerId: string,
    name: string,
    startDate: string,
    endDate: string,
    description: string,
    priority: string, 
    status: string
}