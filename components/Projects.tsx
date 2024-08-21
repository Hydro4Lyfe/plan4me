'use client'

import React from 'react'

import { useState, useEffect } from 'react'
import api from '@/app/api/api'
import { Project } from '@/lib/utils'
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

const Projects = () => {
    const [projects, setProjects ] = useState([])
  
    useEffect(() => {
        api('/api/projects').then((res) => {
        setProjects(res.data.projects);
        }).catch((err) => console.warn(err))
    }, [])

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Projects</h1>
            <Separator />
            <div className="h-full w-full flex flex-row flex-wrap gap-3">
            { projects.map( (project: Project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="w-[375px] h-[200px] hover:drop-shadow-lg">
                    <Card className="h-full flex flex-col justify-between">
                        <CardHeader>
                        <CardTitle >{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
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
