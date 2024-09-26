'use client'

import api from "@/app/api/api";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import DeleteProject from "@/components/DeleteProject";
import useSWR from "swr";
import NewTask from "@/components/NewTask";

import { TaskInterface } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import NewTaskSheet from "@/components/NewTaskSheet";
import Link from "next/link";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function Page()
{
    const path = usePathname()
    const id = path.substring(path.lastIndexOf('/') + 1)
    // const [project, setProject] = useState<Project>(DefaultProject)
    const fetcher = () => api.get('/api/projects/'+id).then((res) => res.data)

    const { data, error } = useSWR('/api/projects/'+id, fetcher, {
        
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
    
    const project = data.project
    const tasks = project.tasks

    console.log(tasks)

    return (
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <Separator className="my-2"/>
          <h3>{project.description}</h3>
          <Separator className="my-2"/>
          <h3>{project.ownerId}</h3>
          <Separator className="my-2"/>
          <p>{format(project.startDate, "PPP")}</p>
          <p>{format(project.endDate, "PPP")}</p>
          <p>{project.priority}</p>
          <p>{project.status}</p>
          { tasks?.map( (task: TaskInterface) => (
                <Link href={`/tasks/${task.id}`} key={task.id} className="w-[375px] h-[250px] hover:drop-shadow-lg">
                    <Card className="h-full flex flex-col justify-between max-h-full">
                        <CardHeader>
                        <CardTitle >{task.name}</CardTitle>
                        <CardDescription className='overflow-hidden text-ellipsis max-h-18 min-h-0'>{task.description}</CardDescription>
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
          <NewTaskSheet projectId={id} redirect={false}/>
          <DeleteProject />
        </div>    
    );
}
