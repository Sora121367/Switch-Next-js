import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import User from '@/models/User';

export async function GET(req) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader && authHeader.split(' ')[1]; // Get token from "Bearer <token>"

  if (!token) {
    return new NextResponse(
      JSON.stringify({ message: "Unauthenticated" }),
      { status: 401 }
    );
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const id = decoded.id; // Extract user ID from token payload

    // Fetch user from database
    const user = await User.findById(id);
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found" }),
        { status: 404 }
      );
    }

    // If token is valid and user exists, return user data
    return new NextResponse(
      JSON.stringify({ message: "Authenticated", user }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid or expired token", error: error.message }),
      { status: 403 }
    );
  }
}
