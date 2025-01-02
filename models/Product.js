import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      instock: { type: Boolean, required: true }, // This must be correct
      image: { type: String, required: true },
    },
    { timestamps: true }
  );
  
  const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
  
  export default Product;
  