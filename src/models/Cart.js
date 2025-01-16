// models/Cart.js
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    user_Id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);

export default Cart;
