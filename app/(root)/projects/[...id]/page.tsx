'use client'

import api from "@/app/api/api";
import Router from "next/router";
import { useSearchParams } from "next/navigation";


async function getProjects(id: string): Promise<any> {
    const res:Promise<any> = await api('/api/projects/'+id).then((res) => {
      return res.data.project
    }).catch((err) => console.warn(err))
    return res
  }

export default function Page()
{
    const searchParams = useSearchParams()

    const search = searchParams.get('')
    //const project = getProjects(id);
    
    return (
        <div>
            Hello
        </div>    
    );
}