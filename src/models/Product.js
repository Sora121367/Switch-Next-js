import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    user_Id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    instock: { type: Boolean, required: true },
    category: { type: String, required: true },
    size: { type: [String], required: true }, 
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
