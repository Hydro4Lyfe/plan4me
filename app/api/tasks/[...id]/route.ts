import { AuthOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import cuid from 'cuid'

export async function GET(req: NextRequest, res: NextResponse) {
    const path = req.nextUrl.pathname
    const ownerId = path.substring(path.lastIndexOf('/') + 1)

    try {
        const task = await prisma.task.findFirst({
            where: {
              id: ownerId 
            }
        });

        return NextResponse.json({ task: task, message: "Retrieved Task"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Something failed"}, { status: 501 });
    }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    const path = req.nextUrl.pathname
    const taskId = path.substring(path.lastIndexOf('/') + 1)

    try {
        const project = await prisma.task.delete({
            where: {
              id: taskId 
            }
        });

        return NextResponse.json({ message: "Task Successfully Deleted" }, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Something failed", error: error }, { status: 501 });
    }
}