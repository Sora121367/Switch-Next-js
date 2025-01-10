import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import User from '@/models/User'; // Import your User model

// Middleware to verify JWT token and fetch all user data
export async function verifyToken(req) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader && authHeader.split(' ')[1];

  console.log("Authorization Header:", authHeader);  // Log incoming headers
  console.log("Token:", token);  // Log the extracted token

  if (!token) {
    return new NextResponse(
      JSON.stringify({ message: "Unauthenticated" }),
      { status: 401 }
    );
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded; // Attach user info to request object

    // Fetch the complete user data from the database
    const user = await User.findById(decoded.id); // Assuming the token contains user.id

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found" }),
        { status: 404 }
      );
    }

    // Log the complete user data
    console.log("Complete User Data:", user); // Log the full user data

    // Return user data in the response
    return new NextResponse(
      JSON.stringify({ message: "Token verified", user }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Token verification error:", error);
    return new NextResponse(
      JSON.stringify({ message: "Invalid or expired token" }),
      { status: 403 }
    );
  }
}



// Function to generate JWT token
export function getToken(user) {
  try {
    // Generate JWT with minimal user data
    return jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_KEY,
      { expiresIn: '5h' }
    );
    
  } catch (error) {
    console.error('JWT Error:', error);
    throw new Error('Failed to generate token');
  }
}
