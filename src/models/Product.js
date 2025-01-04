import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    instock: { type: Boolean, required: true },
    method_payment: { type: String, required: true },
    category: { type: String, default: "Uncategorized" },
    size: { type: String, required:true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
