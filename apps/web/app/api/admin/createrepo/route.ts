import { NextRequest, NextResponse } from 'next/server';
import db from 'db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      description,
      githubUrl,
      adminId,
      forkCount,
      starCount,
      commitCount,
    } = body;
    const createRepo = await db.repos.create({
      data: {
        title,
        description,
        githubUrl,
        forkCount,
        starCount,
        commitCount,
        adminId,
      },
    });
    if (createRepo) {
      return NextResponse.json({
        success: true,
        message: 'Successfully Created repo',
        createRepo,
      });
    } else {
      return NextResponse.json({
        Success: false,
        message: 'Error while creating Repo',
      });
    }
  } catch (error) {
    console.error('Error processing request of creating repo:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error processing request while creating repo',
      },
      { status: 500 },
    );
  }
}
