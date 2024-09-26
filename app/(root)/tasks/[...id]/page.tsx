'use client'

import api from "@/app/api/api";
import { usePathname } from "next/navigation";
import { format } from "date-fns";
import DeleteTask from "@/components/DeleteTask";
import useSWR from "swr";

import { Separator } from "@/components/ui/separator";



export default function Page()
{
    const path = usePathname()
    const id = path.substring(path.lastIndexOf('/') + 1)
    // const [project, setProject] = useState<Project>(DefaultProject)
    const fetcher = () => api.get('/api/tasks/'+id).then((res) => res.data)

    const { data, error } = useSWR('/api/tasks/'+id, fetcher, {
        revalidateOnMount: true,
        revalidateIfStale: false,
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
    
    const task = data.task

    console.log(task)
    return (
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-3xl font-bold">{task.name}</h1>
          <Separator className="my-2"/>
          <h3>{task.description}</h3>
          <Separator className="my-2"/>
          <h3>{task.ownerId}</h3>
          <Separator className="my-2"/>
          <p>{format(task.startDate, "PPP")}</p>
          <p>{format(task.endDate, "PPP")}</p>
          <p>{task.priority}</p>
          <p>{task.status}</p>
          <p>{task.projectId}</p>
          <DeleteTask />
        </div>    
    );
}
