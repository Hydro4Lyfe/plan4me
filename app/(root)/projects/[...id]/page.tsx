'use client'

import api from "@/app/api/api";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import EditProject from "@/components/EditProject";

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
              <EditProject />
            </h1>
        </div>    
    );
}