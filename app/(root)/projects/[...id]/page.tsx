'use client'

import api from "@/app/api/api";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DeleteProject from "@/components/DeleteProject";
import { Project } from "@/lib/utils";
import { DefaultProject } from "@/constants";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Page()
{
    const path = usePathname()
    const temp = path.substring(path.indexOf('/') + 1)
    const id: String = temp.substring(temp.indexOf('/') + 1)
    const [project, setProject] = useState<Project>(DefaultProject)
  
    useEffect(() => {
      api('/api/projects/'+id).then((res) => {
        setProject(res.data.project)
      }).catch((err) => console.warn(err))
    }, [])
    
    return (
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <Separator className="my-2"/>
          <div className="flex flex-col">
            <h1>Add a Task!</h1>
            <Button>New Task</Button>
          </div>
          <DeleteProject />
        </div>    
    );
}