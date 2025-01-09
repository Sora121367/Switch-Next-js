import { NextResponse } from "next/server";
import connectDB from "@/Utils/db";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { role } = await req.json();
  const token = req.headers.get("Authorization")?.split(" ")[1]; // Extract token from Authorization header

  // If token is not provided
  if (!token) {
    return NextResponse.json(
      { message: "No token provided" },
      { status: 401 }
    );
  }

  let decoded;
  try {
    // Verify and decode the token to extract user_id
    decoded = jwt.verify(token, process.env.JWT_KEY); // Use the same secret key you used for signing the token
  } catch (err) {
    console.error("Token Verification Error:", err);
    return NextResponse.json(
      { message: "Invalid token", error: err.message },
      { status: 403 }  // Forbidden
    );
  }

  // Get the userId from the decoded token
  const userId = decoded.id; // Assuming the user ID is stored as 'id' in the token payload

  // Check if the role is valid
  if (!role || !["seller", "customer"].includes(role)) {
    return NextResponse.json(
      { message: "Invalid role. Must be 'Seller' or 'Customer'" },
      { status: 400 }
    );
  }

  try {
    // Connect to the database
    await connectDB();

    // Fetch the user from the database using the userId from the decoded token
    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Update the user's role
    user.role = role;
    await user.save();
    // Return success response
    return NextResponse.json(
      { message: "Role updated successfully", user: { id: user._id, role: user.role } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating role:", error);
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}
