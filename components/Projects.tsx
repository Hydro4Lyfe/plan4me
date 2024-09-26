'use client'
import React from 'react'

import useSWR from 'swr'
import api from '@/app/api/api'
import { ProjectInterface } from '@/lib/utils'
import { format } from 'date-fns'

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

const fetcher = () => api.get('/api/projects').then((res) => res.data)

const Projects = () => {
    const { data, error } = useSWR('/api/projects', fetcher, {
        revalidateOnMount: true,
        revalidateIfStale: false,
        revalidateOnFocus: true
    })

    // if (error) return(
    //     <div className='flex flex-col justify-center items-center'>
    //         Failed to load
    //     </div>
    // ) 
    if (!data) return(
        <div className='flex flex-col justify-center items-center'>
            Loading...
        </div>
    ) 
    
    const projects = data.projects

    console.log(projects)

    return (
        <div className="flex flex-col gap-3">
            <div className="h-full w-full flex flex-row flex-wrap gap-3">
            { projects?.map( (project: ProjectInterface) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="w-[375px] h-[250px] hover:drop-shadow-lg">
                    <Card className="h-full flex flex-col justify-between max-h-full">
                        <CardHeader>
                        <CardTitle >
                            <div className='flex flex-row justify-between'>
                                {project.name}
                                <p className='text-sm text-primary'>{project.tasks.length}</p>
                            </div>
                        </CardTitle>
                        <CardDescription className='overflow-hidden text-ellipsis max-h-18 min-h-0'>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col items-left justify-content">
                                <p className="text-lg" >Project Started</p>
                                <p className="text-sm text-primary dark:text-primary" >{format(project.startDate, "PPP")}</p>
                            </div>
                            <div className="flex flex-col items-left justify-content">
                                <p className="text-lg">Project End</p>
                                <p className="text-sm text-primary dark:text-primary">{format(project.endDate, "PPP")}</p>
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

export default Projects
