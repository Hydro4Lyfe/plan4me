import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import Router from "next/router";

export async function GET(req: NextRequest, res: NextResponse) {
    const projectId = Router.query

    try {
        const project = await prisma.project.findMany({
            where: {
              id: projectId 
            }
        });

        return NextResponse.json({ project: project, message: "Retrieved Project"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Something failed"}, { status: 501 });
    }
}