import { NextResponse } from "next/server";
import connectDB from "@/Utils/db";
import Product from "@/models/Product";

export async function GET() {
  try {
    // Connect to the database
    await connectDB();

    // Fetch all products from the database
    const products = await Product.find();

    // Respond with the products
    return NextResponse.json(
      { message: "Products fetched successfully", products },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    // Generic error response
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
