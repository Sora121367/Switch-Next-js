import { NextResponse } from "next/server";
import connectDB from "@/Utils/db"; // Assuming this is your DB connection utility
import Cart from "@/models/Cart"; // Assuming you have a Cart model
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    // Get token from authorization header
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

    // Extract data from the form
    const formData = await req.formData();
    const productId = formData.get("productId");
    const quantity = parseInt(formData.get("quantity"));
    const title = formData.get("title");
    const price = parseFloat(formData.get("price"));
    const size = formData.get("size");
    const image = formData.get("image");

    if (!productId || !quantity || !title || !price || !size || !image) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (quantity <= 0 || price <= 0) {
      return NextResponse.json(
        { message: "Quantity and price must be greater than zero" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if the user exists
    const user = await User.findById(user_Id);
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Check if the product already exists in the cart
    const existingCartItem = await Cart.findOne({
      user_Id,
      productId,
    });

    if (existingCartItem) {
      // If item exists, update the quantity
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
    } else {
      // If item does not exist, create a new cart item
      const newCartItem = new Cart({
        user_Id,
        productId,
        quantity,
        title,
        price,
        size,
        image,
      });
      await newCartItem.save();
    }

    return NextResponse.json(
      { message: "Item added to cart successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    // Get token from authorization header
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

    await connectDB();

    // Fetch cart items for the user
    const cartItems = await Cart.find({ user_Id });

    return NextResponse.json(cartItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
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

    const { itemId } = await req.json(); 
    if (!itemId) {
      return NextResponse.json(
        { message: "Item ID is required to delete" },
        { status: 400 }
      );
    }

    await connectDB();

    // Remove the item from the cart
    await Cart.deleteOne({ _id: itemId, user_Id });

    return NextResponse.json(
      { message: "Item removed from cart" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
