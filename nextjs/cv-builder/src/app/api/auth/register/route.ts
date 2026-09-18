import { generateJWT } from "@/lib/jwt";
import { connectDb } from "@/lib/mongodb";
import UserModel from "@/models/user.model";
import { ApiResponse } from "@/types/api.types";
import { RequestBody } from "@/types/user.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();

    let body: RequestBody = await req.json();

    let { name, email, mobile, password } = body;

    if (!name || !email || !password)
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        },
      );

    const isExisted = await UserModel.findOne({ email });

    if (isExisted)
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "user alredy existed",
        },
        {
          status: 409,
        },
      );

    const newUser = await UserModel.create({
      name,
      email,
      password,
      mobile,
    });

    const token = generateJWT({ userId: newUser._id });

    const response = NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "User registered successfully",
        data: {
          name: newUser.name,
          email: newUser.email,
        },
      },
      {
        status: 201,
      },
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });

    return response;
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
