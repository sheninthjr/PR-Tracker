import { type NextRequest, NextResponse } from 'next/server';
import db from 'db'

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();
        const { githubUsername,password } = body;
        const user = await db.admin.findFirst({
            where: {
                githubUsername: githubUsername,
                password: password
            }
        })
        if (user) {
            return NextResponse.json({ success: true, user });
        } else {
            await db.admin.create({
                data: {
                    githubUsername: githubUsername,
                    password: password
                }
            })
            return NextResponse.json({ success: true }, { status: 201 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error processing request' }, { status: 500 });
    }
}