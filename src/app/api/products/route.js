import { NextResponse } from "next/server";
import connectDB from "@/Utils/db";
import Product from "@/models/Product";
import User from "@/models/User";
import cloudinary from "cloudinary";
import jwt from "jsonwebtoken";
import { Readable } from "stream";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Helper function to upload the image stream to Cloudinary
async function streamUpload(file) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { folder: "products" },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    const readableStream = Readable.from(file.stream());
    readableStream.pipe(stream);
  });
}

export async function POST(req) {
  try {
    // Extract token from Authorization header
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json(
        { message: "Authorization token is required" },
        { status: 401 }
      );
    }

    // Verify token
    let user_Id;
    try {
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      user_Id = decoded.id;
    } catch (err) {
      return NextResponse.json(
        { message: "Invalid token", error: err.message },
        { status: 403 }
      );
    }

    const formData = await req.formData();

    // Extract and validate fields
    const title = formData.get("title");
    const price = parseFloat(formData.get("price"));
    const description = formData.get("description");
    const instock = formData.get("instock") === "true";
    const size = formData.get("size")?.split(",") || [];
    const image = formData.get("image"); // File instance

    if (!title || !price || !description || !image) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (price <= 0) {
      return NextResponse.json(
        { message: "Price must be greater than zero" },
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
        { status: 403 }
      );
    }

    // Upload image to Cloudinary using stream
    let uploadedImage;
    try {
      uploadedImage = await streamUpload(image);
    } catch (err) {
      console.error("Image Upload Error:", err);
      return NextResponse.json(
        { message: "Image upload failed", error: err.message },
        { status: 500 }
      );
    }

    // Create a new product
    const newProduct = new Product({
      user_Id,
      title,
      price,
      description,
      instock,
      size, // Ensure size is an array
      image: uploadedImage.secure_url, // Use the Cloudinary URL
    });

    // Save the product
    await newProduct.save();

    return NextResponse.json(
      {
        message: "Product created successfully",
        product: newProduct,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during product creation:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
//product