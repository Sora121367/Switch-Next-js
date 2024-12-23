"use client";
import React, { useState } from "react";
import Orderdetails from "@/components/seller-components/Order/Orderdetails";

const Order = () => {
  const products = [
    {
      src: "/image8.png",
      name: "Vintage T-Shirts: A Timeless Retro Look",
      size: "M",
      price: "$10.00",
      quantity: 1,
    },
    {
      src: "/image8.png",
      name: "Flowers T-shirt: The Real Man",
      size: "L",
      price: "$20.00",
      quantity: 3,
    },
    {
      src: "/image8.png",
      name: "Swag 1999 Timeless Retro Look",
      size: "XL",
      price: "$15.00",
      quantity: 1,
    },
  ];

  const [showSection, setShowSection] = useState(false);

  return (
    <>
      {!showSection ? (
        <div className="w-full h-screen p-6">
          {/* Page Title */}
          <h1 className="text-2xl font-bold mb-4">Products Order</h1>

          {/* Controls Section */}
          <div className="w-full flex items-center gap-x-16 gap-y-4 ml-10">
            {/* Dropdowns Section */}
            <div className="w-72 flex gap-6">
              <button className="py-2 px-6 rounded-lg border-2 border-black text-[#0B5754]">
                Select
              </button>
              <button
                onClick={() => setShowSection(true)}
                className="py-2 px-6 rounded-lg border-2 border-black"
              >
                Mass update
              </button>
            </div>

            {/* Search Bar and Button Section */}
            <div className="flex items-center gap-4 ml-14">
              <input
                type="text"
                placeholder="Search your product's name..."
                className="w-[30rem] border-2 border-black rounded-full p-2 px-4 outline-none"
              />

              <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
                Delete all products
              </button>
            </div>
          </div>

          {/* Order Details */}
          <div className="w-full border p-4 rounded-md shadow-lg bg-white mt-6">
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <h1 className="text-xl font-semibold">Ung Mengly</h1>
                <p className="text-gray-500">09 December 2024</p>
              </div>
              <div className="flex items-center gap-6">
                <p className="text-lg font-semibold">$46.25</p>
                <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
                  Print
                </button>
                <button className="border-2 px-4 py-2 rounded-md">Update</button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="mb-2">
                <p className="text-gray-500">Awaiting Payment</p>
                <p className="text-gray-700">menglyung44@gmail.com</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-500">Awaiting Processing</p>
                <p className="text-gray-700">menglyung44@gmail.com</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">💳 Pay by card</p>
              </div>

              <div className="flex flex-col gap-y-2">
                <p className="text-md font-semibold">{products.length} products</p>
                {products.map((product, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img
                      src={product.src}
                      alt={product.name}
                      className="w-[4.2rem]"
                    />
                    <div>
                      <p>{product.name}</p>
                      <p>Size: {product.size}</p>
                      <p>
                        x{product.quantity} <span>{product.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="text-gray-500">Customer's comments:</p>
              <p className="text-gray-700 italic">
                "Your product's very cool, so I got 2 items, and I hope you
                confirm my order soon."
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Orderdetails onBack={() => setShowSection(false)} />
        )}
    </>
  );
};

export default Order;
