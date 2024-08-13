import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { redirect } from "next/dist/server/api-utils";

export async function POST(req: NextRequest) {
    try {
        const body  = await req.json();


        const { ownerId, name, description, endDate } = body;

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
        return NextResponse.json({message: "Something failed"}, { status: 501 });
    }
}