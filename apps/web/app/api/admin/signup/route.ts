import { type NextRequest, NextResponse } from 'next/server';
import db from 'db';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstname, lastname, username, email, password } = body;
    const user = await db.admin.findFirst({
      where: { email },
    });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        return NextResponse.json({ success: true, user });
      } else {
        return NextResponse.json(
          { success: false, message: 'Invalid email or password' },
          { status: 401 },
        );
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await db.admin.create({
        data: {
          firstname,
          lastname,
          username,
          email,
          password: hashedPassword,
        },
      });
      return NextResponse.json(
        { success: true, user: newUser },
        { status: 201 },
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing request' },
      { status: 500 },
    );
  }
}
