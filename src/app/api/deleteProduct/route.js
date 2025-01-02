import { NextResponse } from "next/server";
import connectDB from "../../../../Utils/db";
import Product from "../../../../models/Product";
import mongoose from "mongoose";

export async function DELETE(req) {
  try {
    const { ids } = await req.json();

    // Validate if each ID is a valid ObjectId
    const invalidIds = ids.filter(id => !mongoose.Types.ObjectId.isValid(id));
    if (invalidIds.length > 0) {
      return NextResponse.json(
        { message: `Invalid ObjectId(s): ${invalidIds.join(", ")}` },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();

    // Delete products by IDs
    const deletedProducts = await Product.deleteMany({
      _id: { $in: ids }
    });

    // Check if products were deleted
    if (deletedProducts.deletedCount === 0) {
      return NextResponse.json(
        { message: "No products found with the provided IDs" },
        { status: 404 }
      );
    }

    // Success response
    return NextResponse.json(
      { message: "Products deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting products:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
