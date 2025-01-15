import React from "react";
import ProductDetail from "./productDetail";
import CustomerHeader from "@/components/customerpage/CustomerHeader";

const Product = async ({ params }) => {
  const { productId } = params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/get-productId?productId=${productId}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch product details. Please try again later.");
    }

    const { product } = await res.json();

    if (!product) {
      return (
        <div className="p-10">
          <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
          <p className="text-gray-600">The product you are looking for does not exist or is currently unavailable.</p>
        </div>
      );
    }

    const { title, description, price, image = [], instock, size } = product;

    return (
      <div>
        <div className="bg-[#1E1E1E]">
          <CustomerHeader />
        </div>

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
    console.error("Error fetching product details:", error.message);
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <p className="text-gray-600">{error.message}</p>
        <p className="text-gray-500">
          Please check your internet connection or try again later. If the problem persists, contact support.
        </p>
      </div>
    );
  }
};

export default Product;
