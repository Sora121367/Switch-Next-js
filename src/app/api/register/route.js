import { NextResponse } from 'next/server';
import User from "../../../../models/User";
import connectDB from "../../../../Utils/db";
import bcrypt from "bcrypt";

const sendResponse = (message, status, data = {}) => {
  // Use NextResponse constructor properly here to set the status
  return new NextResponse(JSON.stringify({ message, ...data }), { status });
};

export async function POST(req) {
  const { username, email, password } = await req.json();
  await connectDB();

  // Check if all fields are provided
  if (!username || !email || !password) {
    return sendResponse("All fields are required", 400); // Returns a 400 error if fields are missing
  }

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendResponse("Email is already taken", 400); // Returns 400 if email already exists
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    return sendResponse("User registered successfully", 201, {
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);

    // Check for duplicate email (MongoDB error code)
    if (error.code === 11000) {
      return sendResponse("Email is already taken", 400); // Duplicate email error
    }

    return sendResponse("Server error", 500); // Server error
  }
}
