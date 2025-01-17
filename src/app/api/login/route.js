import { NextResponse } from 'next/server';
import connectDB from '@/Utils/db';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import { getToken } from '@/Utils/verifyToken';

// Helper to send responses
const sendResponse = (message, status, data = {}) => {
  return new NextResponse(JSON.stringify({ message, ...data }), { status });
};

export async function POST(req) {
  const { email, password } = await req.json(); // Parsing the body using req.json()

  await connectDB();

  if (!email || !password) {
    return sendResponse('Email and password are required', 400);
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse('Invalid email or password', 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return sendResponse('Invalid email or password', 401);
    }

    const token = getToken(user); // Call the function to generate the token

    // Respond with the token and minimal user data
    return sendResponse('Login successful', 200, {
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
    
        
      },
    });
  } catch (error) {
    console.error(error);
    return sendResponse('Server error', 500);
  }
}




//login