import { NextResponse } from "next/server";
import User from "../../../../models/User";
import connectDB from "../../../../Utils/db";

const sendResponse = (message, status, data = {}) => {
  return new NextResponse(JSON.stringify({ message, ...data }), { status });
};

export async function POST(req) {
  const {code } = await req.json();
  await connectDB();

  if (!code) {
    return sendResponse("Email and code are required", 400);
  }

  try {
    const user = await User.findOne({ 
      verificationToken: code
    });

    if (!user) {
      return sendResponse("User not found", 404);
    }

    if (user.isVerified) {
      return sendResponse("Email is already verified", 400);
    }

    if (user.verificationToken !== code) {
      return sendResponse("Invalid verification code", 400);
    }

    if (Date.now() > user.verificationTokenExpiresAt) {
      return sendResponse("Verification code expired", 400);
    }

    user.isVerified = true; 
    await user.save();

    return sendResponse("Email verified successfully", 200);
  } catch (error) {
    console.error(error);
    return sendResponse("Server error", 500);
  }
}
