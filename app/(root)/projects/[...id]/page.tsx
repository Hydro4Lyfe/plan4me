'use client'

import api from "@/app/api/api";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import DeleteProject from "@/components/DeleteProject";
import { Project } from "@/lib/utils";
import { DefaultProject } from "@/constants";
import useSWR from "swr";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import NewTaskSheet from "@/components/NewTaskSheet";



export default function Page()
{
    const path = usePathname()
    const id = path.substring(path.lastIndexOf('/') + 1)
    // const [project, setProject] = useState<Project>(DefaultProject)
    const fetcher = () => api.get('/api/projects/'+id).then((res) => res.data)

    const { data, error } = useSWR('/api/projects/'+id, fetcher)

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
          <NewTaskSheet />
          <DeleteProject />
        </div>    
    );
}
