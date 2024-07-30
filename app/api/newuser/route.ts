import  prisma  from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
    const session = getServerSession();

    try {
        const body = await req.json();
        const { name, description } = body;
        const id = await hash(Date(), 10);

        const newProject = await prisma.project.create({
            data: {
              id,
              ownerId,
              groupId,
              name,
              description,
              status  
            }
        });

        return NextResponse.json({ project: newProject, message: "Created new project"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Something failed"}, { status: 501 });
    }
}