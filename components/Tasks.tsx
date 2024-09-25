'use client'
import React from 'react'

import useSWR from 'swr'
import { format } from 'date-fns'
import api from '@/app/api/api'
import { Task } from '@/lib/utils'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"
import { Separator } from './ui/separator'
import Link from 'next/link'

const fetcher = () => api.get('/api/tasks').then((res) => res.data)

const Tasks = () => {
    const { data } = useSWR('/api/tasks', fetcher)

    if (!data) return(
        <div className='flex flex-col justify-center items-center'>
            Loading...
        </div>
    ) 
    
    const tasks = data.tasks

    return (
        <div className="flex flex-col gap-3">
            <div className="h-full w-full flex flex-row flex-wrap gap-3">
            { tasks?.map( (task: Task) => (
                <Link href={`/projects/${task.id}`} key={task.id} className="w-[375px] h-[250px] hover:drop-shadow-lg">
                    <Card className="h-full flex flex-col justify-between max-h-full">
                        <CardHeader>
                        <CardTitle >{task.name}</CardTitle>
                        <CardDescription className='overflow-hidden text-ellipsis max-h-16 min-h-0'>{task.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col items-left justify-content">
                                <p className="text-lg" >Project Started</p>
                                <p className="text-sm text-primary dark:text-primary" >{format(task.startDate, "PPP")}</p>
                            </div>
                            <div className="flex flex-col items-left justify-content">
                                <p className="text-lg">Project End</p>
                                <p className="text-sm text-primary dark:text-primary">{format(task.endDate, "PPP")}</p>
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
        </div> 
    )
}

export default Tasks
