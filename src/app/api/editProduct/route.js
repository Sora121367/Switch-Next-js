import { NextResponse } from "next/server";
import connectDB from "@/Utils/db";
import Product from "@/models/Product";
import mongoose from "mongoose";

export async function PUT(req) {
  try {
    const { id, data } = await req.json();

    // Validate if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: `Invalid ObjectId: ${id}` },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();

    // Find and update the product
    const updatedProduct = await Product.findByIdAndUpdate(id, data, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validations are applied
    });

    // Check if product was found and updated
    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Success response with updated product data
    return NextResponse.json(
      { message: "Product updated successfully", updatedProduct },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
