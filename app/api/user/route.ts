import { NextResponse } from "@/node_modules/next/server";
import { hash } from 'bcrypt';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, age } = body;



        return NextResponse.json(body);
    } catch (error) {
        
    }
}