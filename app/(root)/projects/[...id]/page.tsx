'use client'

import api from "@/app/api/api";
import Router from "next/router";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Project } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth";

export default function Page()
{
    const path = usePathname()
    const temp = path.substring(path.indexOf('/') + 1)
    const id = temp.substring(temp.indexOf('/') + 1)
    const [project, setProject] = useState([])
  
    useEffect(() => {
      api('/api/projects/'+id).then((res) => {
        setProject(res.data.project)
      }).catch((err) => console.warn(err))
    }, [])
    
    return (
        <div>
            <h1>
              {/* {
                project.map((project: Project) => (
                  <h1>{project.name}</h1>
              ))} */}
            </h1>
        </div>    
    );
}