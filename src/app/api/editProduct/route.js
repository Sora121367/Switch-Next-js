import { NextResponse } from "next/server";
import connectDB from "@/Utils/db";
import Product from "@/models/Product";
import mongoose from "mongoose";

export async function PUT(req) {
  try {
    const { id, user_Id, data } = await req.json();

    // Validate if the ID and user_Id are valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: `Invalid ObjectId: ${id}` },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(user_Id)) {
      return NextResponse.json(
        { message: `Invalid user_Id: ${user_Id}` },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();

    // Find the product by ID and user_Id and update it
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id, user_Id }, // Match both product ID and user ID
      data, // Update data
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure validations are applied
      }
    );

    // Check if product was found and updated
    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found or you do not have permission to update this product" },
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
