import { type NextRequest, NextResponse } from 'next/server';
import db from 'db';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const user = await db.user.findFirst({
      where: {
        email: email,
        password: password,
      },
    });
    if (user) {
      return NextResponse.json({ success: true, user });
    } else {
      return NextResponse.json(
        { success: false, message: 'Please Signup' },
        { status: 401 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Error processing request' },
      { status: 500 },
    );
  }
}
