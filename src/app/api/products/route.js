import { NextResponse } from "next/server";
import connectDB from "@/Utils/db";
import Product from "@/models/Product";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { streamUpload } from "@/Utils/cloudinary";

export async function POST(req) {
  try {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json(
        { message: "Authorization token is required" },
        { status: 401 }
      );
    }

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
    const title = formData.get("title");
    const price = parseFloat(formData.get("price"));
    const description = formData.get("description");
    const instock = formData.get("instock") === "true";
    const category = formData.get("category");
    const size = formData.get("size")?.split(",") || [];
    const image = formData.get("image");

    if (!title || !price || !description || !image || !category) {
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

    await connectDB();

    const user = await User.findById(user_Id);
    if (!user) {
      return NextResponse.json(
        { message: "Invalid user ID. User does not exist." },
        { status: 403 }
      );
    }

    let uploadedImage;
    try {
      uploadedImage = await streamUpload(image, "products");
    } catch (err) {
      console.error("Image Upload Error:", err);
      return NextResponse.json(
        { message: "Image upload failed", error: err.message },
        { status: 500 }
      );
    }

    const newProduct = new Product({
      user_Id,
      title,
      price,
      description,
      instock,
      category,
      size,
      image: uploadedImage.secure_url,
    });

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
