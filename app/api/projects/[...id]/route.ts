import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const path = req.nextUrl.pathname
    const projectId = path.substring(path.lastIndexOf('/') + 1)

    try {
        const project = await prisma.project.findFirst({
            where: {
              id: projectId 
            }
        });

        return NextResponse.json({ project: project, message: "Retrieved Project"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Something failed"}, { status: 501 });
    }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    const path = req.nextUrl.pathname
    const projectId = path.substring(path.lastIndexOf('/') + 1)

    try {
        const project = await prisma.project.delete({
            where: {
              id: projectId 
            }
        });

        return NextResponse.json({ message: "Project Successfully Deleted" }, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Something failed", error: error }, { status: 501 });
    }
}
export async function UPDATE(req: NextRequest, res: NextResponse) {
    const path = req.nextUrl.pathname
    const projectId = path.substring(path.lastIndexOf('/') + 1)

    try {
        const project = await prisma.project.findFirst({
            where: {
              id: projectId 
            }
        });

        return NextResponse.json({ project: project, message: "Retrieved Project"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Something failed"}, { status: 501 });
    }
}