"use client";
import React from "react";
import CustomerProduct from "./CustomerProduct";

const products = [
  {
    id: 1,
    title: "Bike Store",
    description: "Damecykel",
    price: "$200",
    image: "/image8.png",
  },
  {
    id: 2,
    title: "Clothing Store",
    description: "Trendy T-Shirts",
    price: "$50",
    image: "/image8.png",
  },
  {
    id: 3,
    title: "Gadget Shop",
    description: "Smartphone Accessories",
    price: "$30",
    image: "/image8.png",
  },
  {
    id: 4,
    title: "Bookstore",
    description: "Fictional Novels",
    price: "$15",
    image: "/image8.png",
  },
];

const CustomerSection = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-slate-600 w-full h-1/2 p-10 flex items-center">
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
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <CustomerProduct
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      <div className="w-full flex gap-3 justify-between ">
        <div className=" w-full p-8 flex flex-col bg-gray-100 shadow-md">
          {/* Product Discount Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold">Product discount</h2>
            <p className="text-gray-600">
              Find the best shops near <br /> Shop the best product for you here
            </p>
            <div className="mt-6 flex gap-4 h-[15rem]">
              {/* Card 1 */}
              <div className="relative  bg-white shadow-md rounded-lg overflow-hidden w-64">
                <img
                  src="/image8.png"
                  alt="Product"
                  className="w-full object-cover"
                />
                <div className="absolute top-1 right-2 w-12 h-12 bg-orange-500 text-white text-[.8rem] font-bold  rounded-full">
                  <p className="text-center">OFF 10%</p>
                </div>
                <button className="bg-green-600 absolute bottom-2 left-2 text-white px-4 py-2  rounded-lg  hover:bg-green-700 transition">
                  Add to card
                </button>
              </div>
              {/* Card 2 */}
              <div className="relative  bg-white shadow-md rounded-lg overflow-hidden w-64">
                <img
                  src="/image8.png"
                  alt="Product"
                  className="w-full object-cover"
                />
                <div className="absolute top-1 right-2 w-12 h-12 bg-orange-500 text-white text-[.8rem] font-bold  rounded-full">
                  <p className="text-center">OFF 10%</p>
                </div>
                <button className="bg-green-600 absolute bottom-2 left-2 text-white px-4 py-2  rounded-lg  hover:bg-green-700 transition">
                  Add to card
                </button>
              </div>
              {/* Card 3 */}
              <div className="relative  bg-white shadow-md rounded-lg overflow-hidden w-64">
                <img
                  src="/image8.png"
                  alt="Product"
                  className="w-full object-cover"
                />
                <div className="absolute top-1 right-2 w-12 h-12 bg-orange-500 text-white text-[.8rem] font-bold  rounded-full">
                  <p className="text-center">OFF 10%</p>
                </div>
                <button className="bg-green-600 absolute bottom-2 left-2 text-white px-4 py-2  rounded-lg  hover:bg-green-700 transition">
                  Add to card
                </button>
              </div>
            </div>
          </div>
          {/* Featured Shops Section */}
          <div className="mb-8 relative">
            <img
              src="/image9.png"
              alt="Featured Shops"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h3 className="text-2xl font-bold">
                Featured shops of the month
              </h3>
              <button className="mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                View more
              </button>
            </div>
          </div>
        </div>

        {/* Best Sellers Section */}
        <div className="w-[30rem] ">
          <h2 className="text-xl font-bold">Best sellers</h2>
          <div className="mt-4 flex flex-col gap-4">
            {/* Seller 1 */}
            <div className="flex bg-white p-4 shadow-md ">
              <img
                src="/image2.png"
                alt="Clothes store"
                className="w-40 object-cover rounded-md mr-4"
              />
              <p className="text-lg font-semibold">Clothes store</p>
            </div>
            {/* Seller 2 */}
            <div className="flex bg-white p-4 shadow-md ">
              <img
                src="/image2.png"
                alt="Clothes store"
                className="w-40 object-cover rounded-md mr-4"
              />
              <p className="text-lg font-semibold">Clothes store</p>
            </div>
            {/* Seller 3 */}
            <div className="flex bg-white p-4 shadow-md ">
              <img
                src="/image2.png"
                alt="Clothes store"
                className="w-40 object-cover rounded-md mr-4"
              />
              <p className="text-lg font-semibold">Clothes store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
