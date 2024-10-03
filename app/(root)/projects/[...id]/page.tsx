"use client";

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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  const path = usePathname();
  const id = path.substring(path.lastIndexOf("/") + 1);
  // const [project, setProject] = useState<Project>(DefaultProject)
  const fetcher = () => api.get("/api/projects/" + id).then((res) => res.data);

  const { data, error } = useSWR("/api/projects/" + id, fetcher, {});

  // if (error) return(
  //     <div className='flex flex-col justify-center items-center'>
  //         Failed to load
  //     </div>
  // )
  if (!data)
    return (
      <div className="flex flex-col justify-center items-center">
        Loading...
      </div>
    );

  const project = data.project;
  const tasks = project.tasks;

  console.log(tasks);

  return (
    <div className="flex flex-col justify-between items-start gap-1">
        <div className="flex flex-row justify-between w-full">
            <h1 className="text-3xl font-bold text-primary">{project.name}</h1>
            <DeleteProject />
        </div>
        
        
      <Separator className="my-2" />
      <h3>{project.description}</h3>
      <Table className="mt-8">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Name</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead className="">Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks?.map((task: TaskInterface) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.name}</TableCell>
              <TableCell>{task.priority}</TableCell>
              <TableCell className="text-nowrap">{task.description}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>{format(task.endDate, "PPP")}</TableCell>
              <TableCell>
                <Link href={`/tasks/${task.id}`}>link</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <NewTaskSheet projectId={id} redirect={false} />
    </div>
  );
}
