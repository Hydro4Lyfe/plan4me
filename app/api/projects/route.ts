import { AuthOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const session = await getServerSession(AuthOptions)
    const userId = session?.user.id

    try {
        const projects = await prisma.project.findMany({
            where: {
              ownerId: userId 
            }
        });
        return NextResponse.json({ projects: projects, message: "Retrieved Projects"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Something failed"}, { status: 501 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const [body, session] = await Promise.all([req.json(), getServerSession(AuthOptions)])
        const { name, description, endDate } = body;
        const ownerId = session?.user.id || ""

        const newProject = await prisma.project.create({
            data: {
              ownerId,
              name,
              description,
              endDate,
            }
        });

        return NextResponse.json({ project: newProject, message: "Created new project"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Something failed: in here", error: error}, { status: 501 });
    }
}