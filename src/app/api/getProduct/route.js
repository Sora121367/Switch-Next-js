import { NextResponse } from "next/server";
import connectDB from "@/Utils/db";
import Product from "@/models/Product";
import jwt from "jsonwebtoken"; // Ensure you have jwt installed

export async function GET(req) {
  try {
    await connectDB();

    // Get token from the Authorization header
    const token = req.headers.get("Authorization")?.split(" ")[1]; // Bearer <token>

    if (!token) {
      return NextResponse.json(
        { message: "Token is required" },
        { status: 401 }
      );
    }

    // Verify and decode the token to extract the user ID
    const decoded = jwt.verify(token, process.env.JWT_KEY); // Ensure JWT_SECRET is in your .env file

    // If the token is valid, extract the user ID
    const user_Id = decoded.id;

    // Fetch products for the user
    const products = await Product.find({ user_Id });

    return NextResponse.json(
      { message: "Products fetched successfully", products },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

// get product