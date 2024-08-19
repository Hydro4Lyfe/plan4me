import { AuthOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const session = await getServerSession(AuthOptions).then(res => {
        return res?.user
    })
    const userId = session?.id

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