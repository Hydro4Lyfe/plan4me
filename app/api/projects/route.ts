import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const userId = "clz6380vx0000hbh0oqdtozg2"

    try {
        const projects = await prisma.project.findMany({
            where: {
              ownerId: userId 
            }
        });

        return NextResponse.json({ project: projects, message: "Retrieved Projects"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Something failed"}, { status: 501 });
    }
}