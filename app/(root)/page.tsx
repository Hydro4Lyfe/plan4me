"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Projects from "@/components/Projects";

export default function Home() {

  return (
      <div className="h-full w-full flex flex-col gap-4">
        <Projects />
        <div className="flex flex-col gap-3">
          {/* <h1 className="text-2xl font-bold">Tasks</h1> */}
          <Separator />
          {/* <div className="h-full w-full flex flex-row gap-3">
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
          </div> */}
          {/* <Projects /> */}
        </div>
        <div className="flex flex-col gap-3">
          {/* <h1 className="text-2xl font-bold">Shared</h1> */}
          <Separator />
          {/* <div className="h-full w-full flex flex-row gap-3">
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
          </div> */}
          {/* <Projects /> */}
          
        </div>
      </div>
      

  );
}
