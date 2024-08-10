import { NextResponse } from 'next/server';
import db from 'db';

export async function GET() {
  try {
    const repos = await db.repos.findMany();
    return NextResponse.json(repos);
  } catch (error) {
    console.error('Error fetching repos:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching repositories',
      },
      { status: 500 },
    );
  }
}
