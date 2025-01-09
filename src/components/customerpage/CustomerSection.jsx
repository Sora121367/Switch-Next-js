"use client";
import React, { useEffect, useState } from "react";
import CustomerProduct from "./CustomerProduct";

const CustomerSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/get-all-products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products); // Assuming the API response includes a `products` array
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="w-full h-1/2 p-10 flex items-center">
        <div className="w-[34rem] bg-white rounded-lg shadow-lg flex items-center overflow-hidden">
          {/* Text Section */}
          <div className="p-6">
            <h1 className="text-4xl font-bold text-black leading-tight mb-4">
              Discover <br /> Local Shops
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Find the best shops near you and explore unique offerings.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
              Learn more
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="/image6.png"
              alt="Local Shop"
              className="w-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div>
        <div className="px-6">
          <h1 className="text-2xl font-bold">Shop by category</h1>
        </div>
        <ul className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <li key={product.id} className="flex justify-center gap-3">
              <CustomerProduct
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerSection;
