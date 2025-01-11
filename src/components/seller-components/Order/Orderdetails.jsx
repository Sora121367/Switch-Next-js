"use client";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { FiCreditCard } from "react-icons/fi";

const Orderdetails = ({ onBack }) => {
  const products = [
    {
      src: "/image8.png",
      name: "Vintage T-Shirts: A Timeless Look",
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

  return (
    <div className="">
      {/* Order products details */}
      <section className="p-6 flex justify-between gap-2 items-center">
        {/* Back Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IoChevronBackOutline className="text-lg" />
            <button
              className="text-lg font-medium text-[#0B5754]"
              onClick={onBack}
            >
              Back
            </button>
          </div>
          <h2 className="text-xl font-semibold">Order products</h2>
        </div>
      </section>

      <div className="flex flex-wrap p-6 space-x-0 lg:space-x-8">
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          <div className="flex justify-between text-gray-700 flex-wrap gap-4">
            <p className="font-semibold text-xl">$46.24</p>
            <p className="text-sm">31 October 2024 19:25</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-2 gap-4">
            <div className="space-y-2">
              <p className="font-semibold text-gray-700">Payment Status</p>
              <p className="text-sm text-yellow-600">Awaiting Payment</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-700">Fulfillment Status</p>
              <p className="text-sm text-yellow-600">Awaiting Processing</p>
            </div>
          </div>

          <div className="space-y-4 mt-4">
            <p className="text-sm font-semibold text-gray-700">
              Customer's comments:
            </p>
            <p className="text-sm italic text-gray-600">
              "Your product's very cool, so I got 2 items, and I hope you're
              confirmed my order soon."
            </p>
          </div>

          <div className="space-y-2 mt-6">
            <p className="text-sm font-semibold text-gray-700">
              Order items: {products.length}
            </p>
            <div className="space-y-2">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.src}
                      alt={product.name}
                      className="w-12"
                    />
                    <div>
                      <p>{product.name}</p>
                      <p>Size: {product.size}</p>
                      <p>SKU: {product.sku}</p>
                    </div>
                  </div>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-72 h-auto lg:h-[22rem] bg-gray-50 p-4 rounded-md shadow-lg">
          {/* Customer Details */}
          <div className="flex gap-2 items-center">
            <img
              src="/image10.png"
              alt="Customer Avatar"
              className="h-12 w-12 rounded-full object-cover mb-4"
            />
            <p className="font-semibold">Ung Mengly</p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col mt-6">
            <h1 className="text-xl font-semibold">Email address</h1>
            <p className="text-sm text-[#0B5754] cursor-pointer">
              menglyung44@gmail.com
            </p>

            {/* Icon and Text as Flex */}
            <div className="flex items-center gap-2 mt-2 cursor-pointer text-sm text-[#0B5754] hover:text-black">
              <IoMdEye className="text-lg" />
              <p>View customer information</p>
            </div>
          </div>

          <hr className="mt-16 border-1 border-black" />
          {/* Payment Details */}
          <div className="flex flex-col mt-7">
            <p className="text-sm font-semibold">Payment details</p>
            {/* Icon and Text */}
            <div className="flex items-center gap-2 mt-2">
              <FiCreditCard className="text-lg text-gray-600" />
              <p className="text-sm text-green-600">Pay by card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;
