import { NextResponse } from "next/server";
import connectDB from "../../../../Utils/db";
import Product from "../../../../models/Product";
import { writeFile } from "fs/promises";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Extract fields from form data
    const title = formData.get("title");
    const price = formData.get("price");
    const description = formData.get("description");
    const instock = formData.get("instock") === "true"; // Convert to boolean
    const image = formData.get("image");

    // Validate required fields
    if (!title || !price || !description || !image == null || !instock == null) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Handle image upload
    const timestamp = Date.now();
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const imagePath = `./public/uploads/${timestamp}_${image.name}`;
    const imageUrl = `/uploads/${timestamp}_${image.name}`;

    // Save image to the server
    await writeFile(imagePath, buffer);

    // Connect to the database
    await connectDB();

    // Create a new product
    const newProduct = new Product({
      title,
      price,
      description,
      instock, // Ensure it's saved as a boolean
      image: imageUrl, // Include the image URL
    });

    // Save the product to the database
    await newProduct.save();

    // Respond with success message and product data
    return NextResponse.json(
      {
        message: "Product created successfully",
        product: newProduct,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during product creation:", error);

    // Generic error response
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
