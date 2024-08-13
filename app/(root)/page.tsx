import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios, { AxiosResponse } from "axios";
import { Console } from "console";
import internal from "stream";
import api from "../api/api";
import { format } from "date-fns"

interface Project {
  id: string,
  ownerId: string,
  name: string,
  startDate: string,
  endDate: string,
  description: string,
  priority: number, 
  status: string
}

 async function getProjects(): Promise<any> {
  const res:Promise<any> = await api('/api/projects').then((res) => {
    return res.data.project
  }).catch((err) => console.warn(err))
  return res
}

export default async function Home() {
  const res = await getProjects()
  const projects = res
  return (
      <div className="h-full w-full flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Separator />
          <div className="h-full w-full flex flex-row gap-3">
            { projects.map( (project: Project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="w-[375px] h-[200px]">
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
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Tasks</h1>
          <Separator />
          <div className="h-full w-full flex flex-row gap-3">
            <Card className="w-[300px]">
                <CardHeader>
                  <CardTitle>Task 1</CardTitle>
                  <CardDescription>First Task</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-sm">Date Started:</p>
                    <p className="text-sm">Date Ended:</p>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Shared</h1>
          <Separator />
          <div className="h-full w-full flex flex-row gap-3">
            <Card className="w-[300px]">
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>First Project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-sm">Date Started:</p>
                    <p className="text-sm">Date Ended:</p>
                  </div>
                </CardContent>
              </Card>
          </div>
          
        </div>
      </div>
      

  );
}
