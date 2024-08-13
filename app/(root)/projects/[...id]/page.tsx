'use client'

import api from "@/app/api/api";
import Router from "next/router";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
      console.log(project)
    }, [])
    
    return (
        <div>
            <h1>
              {project}
            </h1>
        </div>    
    );
}