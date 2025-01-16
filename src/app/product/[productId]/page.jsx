import React from "react";
import ProductDetail from "./productDetail";
import CustomerHeader from "@/components/customerpage/CustomerHeader";

const Product = async ({ params }) => {
  const { productId } = await params;

  try {
    // Fetch product details based on productId
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/get-productId?productId=${productId}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Product not found");
    }

    const { product } = await res.json();

    if (!product) {
      return (
        <div className="p-10">
          <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
        </div>
      );
    }

    const { title, description, price, image = [], instock, size } = product;

    return (
      <div>
        {/* Include CustomerHeader at the top */}
        <div className="bg-[#1E1E1E]">
          <CustomerHeader />
        </div>

        {/* Product Detail Component */}
        <ProductDetail
          title={title}
          description={description}
          price={price}
          image={Array.isArray(image) ? image : []} // Ensure image is an array
          instock={instock}
          size={size}
        />
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold text-red-500">{error.message}</h1>
      </div>
    );
  }
};

export default Product;
