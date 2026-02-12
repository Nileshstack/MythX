import dbConnect from "@/connection/db";
import { limiter } from "@/connection/rateLimit";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // rate limit checkes
  const rateLimitHeaders = limiter.checkNext(req, 10); 

  if (rateLimitHeaders.get("X-RateLimit-Remaining") === "0") {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }
  await dbConnect();

  try {
    const body = await req.json();
    const { name, email, phone, college, branch, transactionid, othercollege } = body;

    // user existence checked
    const isRegister = await User.findOne({
      $or: [{ email }, { phone }],
    });

    if (isRegister) {
      return NextResponse.json(
        { message: "You are already registered" },
        { status: 409 }
      );
    }
// saved user
    const newUser = await User.create({
      name,
      email,
      phone,
      college,
      branch,
      transactionid,
      othercollege,
    });

    return NextResponse.json(
      { message: "Form submitted successfully", data: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}


export async function GET() {
  await dbConnect();

  try {
    const total = await User.countDocuments({});

    const fromKIET = await User.countDocuments({
      college: { $regex: /kiet group of institutions/i },
    });

    const fromOthers = total - fromKIET;

    return NextResponse.json(
      {
        total,
        fromKIET,
        fromOthers,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching registration data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
