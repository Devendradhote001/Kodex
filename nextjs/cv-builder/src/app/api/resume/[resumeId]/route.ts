import { currentUser } from "@/lib/getCurrentUser";
import { connectDb } from "@/lib/mongodb";
import ResumeModel from "@/models/resume.model";
import { ApiResponse } from "@/types/api.types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ resumeId: string }> },
) {
  try {
    await connectDb();

    let user_id = await currentUser();

    let { resumeId } = await params;

    if (!resumeId)
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "Resume id not found",
        },
        {
          status: 404,
        },
      );

    let resume = await ResumeModel.findOne({
      _id: resumeId,
      userId: user_id,
    });

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "Resume fetched",
        data: { resume },
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ resumeId: string }> },
) {
  try {
    await connectDb();

    let userId = await currentUser();

    if (!userId) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "Something went wrong",
        },
        {
          status: 404,
        },
      );
    }

    let { resumeId } = await params;

    let body = await req.json();

    let resume = await ResumeModel.findOneAndUpdate(
      {
        _id: resumeId,
        userId,
      },
      {
        $set: body,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    return NextResponse.json(
      {
        success: true,
        message: "Resume Updated",
        data: resume,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ resumeId: string }> },
) {
  try {
    await connectDb();

    let user_id = await currentUser();

    let { resumeId } = await params;

    if (!resumeId)
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "Resume id not found",
        },
        {
          status: 404,
        },
      );

    await ResumeModel.findOneAndDelete({
      _id: resumeId,
      userId: user_id,
    });

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "Resume Deleted",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
