import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/Utils/db";
import bcrypt from "bcrypt";
import { generateTokenAndSetCookie } from "@/Utils/generateTokenAndSetCookie";
import { sendEmail } from "@/Utils/nodemailer";
import { getToken } from "@/Utils/verifyToken";


const sendResponse = (message, status, data = {}) => {
  return new NextResponse(JSON.stringify({ message, ...data }), { status });
};


export async function POST(req) {
  const {username, email, password } = await req.json();

  await connectDB();

  if (!username || !email || !password ) {
    return sendResponse("All fields are required", 400);
  }

  

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendResponse("Email is already taken", 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
    const verificationTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000;

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt,
      isVerified: false,

    });

    await newUser.save();

    const emailSubject = "Verify Your Email";
    const emailMessage = `Hello ${username},\n\nPlease verify your email using the following code: ${verificationToken}\n\nThis code will expire in 24 hours.\n\nThank you!`;
    await sendEmail(email, emailSubject, emailMessage);

    const token = getToken(newUser);
    const response = sendResponse("User registered successfully", 201, {
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isVerified: newUser.isVerified,
  
      },
    });

    generateTokenAndSetCookie(response, newUser._id);

    return response;
  } catch (error) {
    console.error("Error:", error);
    if (error.code === 11000) {
      return sendResponse("Email is already taken", 400);
    }
    return sendResponse("Server error", 500);
  }
}
