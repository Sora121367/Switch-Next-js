import { NextResponse } from 'next/server';
import connectDB from '../../../../Utils/db';
import User from '../../../../models/User';
import verifyToken from '../../../../Utils/verifyToken';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Import jwt

const sendResponse = (message, status, data = {}) => {
  return new NextResponse(JSON.stringify({ message, ...data }), { status });
};

export async function POST(req) {
  const { email, password } = await req.json();
  await connectDB();

  if (!email || !password) {
    return sendResponse('Email and password are required', 400);
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse('Invalid email or password', 401);
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return sendResponse('Invalid email or password', 401);
    }

    // Generate JWT token (Assuming getToken is defined elsewhere)
    const token = getToken(user); // Generate JWT token

    // Return success response with token and user ID
    return sendResponse('Login successful', 200, { token, userId: user._id });
  } catch (error) {
    console.error('Error during login:', process.env.NODE_ENV === 'development' ? error : 'An error occurred');
    return sendResponse('Internal Server Error', 500);
  }
}

function getToken(user) {
  try {
    // Generate JWT with minimal user data
    return jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_KEY, // JWT secret key from environment variable
      { expiresIn: '5h' } // Token expiration set to 5 hours
    );
  } catch (error) {
    console.error('JWT Error:', error);
    throw new Error('Failed to generate token');
  }
}
