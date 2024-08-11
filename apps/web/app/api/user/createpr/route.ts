import { type NextRequest, NextResponse } from 'next/server';
import db from 'db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, ethAddress, prType, prUrl, userPrId } = body;
    const userPr = await db.userContribution.create({
      data: {
        title,
        description,
        ethAddress,
        prStatus,
        prUrl,
        userPrId,
      },
    });
    if (userPr) {
      return NextResponse.json({
        success: true,
        message: 'User PR created successfully',
        userPr,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Error while creating pr',
      });
    }
  } catch (error) {
    console.error('Error processing request of creating userPr', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error processing request while creating userPr',
      },
      { status: 500 },
    );
  }
}
