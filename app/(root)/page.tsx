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
import Tasks from "@/components/Tasks";

export default function Home() {

  return (
      <div className="h-full w-full flex flex-col gap-4">
        
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Projects</h1> 
          <Separator />
          <Projects />
          <h1 className="text-2xl font-bold">Tasks</h1> 
          <Separator />
          <Tasks />
        </div>
      </div>
  );
}
