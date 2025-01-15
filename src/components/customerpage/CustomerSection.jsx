import React from "react";
import CustomerProduct from "./CustomerProduct";
import MoreProductCard from "./MoreProductCard";
import Link from "next/link";

const CustomerSection = ({ products }) => {
  const firstProducts = products.slice(0, 4);
  const moreProducts = products.slice(4);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <div className="w-full h-1/2 p-10 flex items-center">
        <div className="w-[34rem] bg-white rounded-lg shadow-lg overflow-hidden flex">
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
          <img
            src="/image6.png"
            alt="Local shop illustration"
            className="w-48 object-cover"
          />
        </div>
      </div>

      {/* Product Section */}
      <div>
        <div className="px-6">
          <h1 className="text-2xl font-bold">Shop by category</h1>
        </div>
        <ul className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {firstProducts.map((product) => (
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

      <div className="p-10 w-full h-[100vh]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">More products</h1>
        </div>
        <ul className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {moreProducts.map((product) => (
            <li key={product.id} className="flex justify-center gap-3">
              <Link href={`/product/${product._id}`}>
                <MoreProductCard
                  title={product.title}
                  price={product.price}
                  image={product.image[0]}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerSection;
