import { type NextRequest, NextResponse } from 'next/server';
import db from 'db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { githubUsername, userId, repoId } = body;
    const userPr = await db.userPR.create({
      data: {
        githubUsername,
        repoId,
        userId,
      },
    });
    if (userPr) {
      return NextResponse.json({
        success: true,
        message: 'User PR card created successfully',
        userPr,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Error while creating pr card',
      });
    }
  } catch (error) {
    console.error('Error processing request of creating userPr card:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error processing request while creating userPr card',
      },
      { status: 500 },
    );
  }
}
