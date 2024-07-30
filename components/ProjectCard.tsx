import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/Card"


const ProjectCard = () => {

    return (
            <Card className="w-[300px]">
                <CardHeader>
                    <CardTitle></CardTitle>
                    <CardDescription>First Project</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm">Date Started:</p>
                        <p className="text-sm">Date Ended:</p>
                    </div>
                </CardContent>
            </Card> 
    )
}

export default ProjectCard
