import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const path = req.nextUrl.pathname
    const route = path.substring(path.indexOf("/") + 1)
    const base = route.substring(route.indexOf('/') + 1)
    const projectId = base.substring(base.indexOf('/') + 1)

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