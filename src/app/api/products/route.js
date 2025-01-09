import { NextResponse } from "next/server";
import connectDB from "@/Utils/db";
import Product from "@/models/Product";
import User from "@/models/User"; // Import your User model
import { writeFile } from "fs/promises";
import jwt from "jsonwebtoken"; // Import jsonwebtoken

export async function POST(req) {
  try {
    // Extract token from the Authorization header
    const token = req.headers.get("Authorization")?.split(" ")[1];


    if (!token) {
      return NextResponse.json(
        { message: "Authorization token is required" },
        { status: 401 }  // Unauthorized
      );
    }

    // Verify and decode the token to extract user_Id
    let user_Id;
    try {
      const decoded = jwt.verify(token, process.env.JWT_KEY); // Use the same secret key you used for signing the token
      user_Id = decoded.id; // Get user_Id from the decoded token
    } catch (err) {
      console.error("Token Verification Error:", err);
      return NextResponse.json(
        { message: "Invalid token", error: err.message },
        { status: 403 }  // Forbidden
      );
    }

    const formData = await req.formData();

    // Extract fields from form data
    const title = formData.get("title");
    const price = parseFloat(formData.get("price")); // Ensure it's a number
    const description = formData.get("description");
    const instock = formData.get("instock") === "true"; // Convert to boolean
    const size = formData.get("size");
    const image = formData.get("image");

    // Validate required fields
    if (!title || !price || !description || !image) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();

    // Verify user exists
    const user = await User.findById(user_Id);
    if (!user) {
      return NextResponse.json(
        { message: "Invalid user ID. User does not exist." },
        { status: 403 } // Forbidden
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

    // Create a new product
    const newProduct = new Product({
      user_Id,
      title,
      price,
      description,
      instock,
      size,
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
