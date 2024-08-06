import { type NextRequest, NextResponse } from 'next/server';
import db from 'db';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const user = await db.admin.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
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
