"use client";
import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const CustomerDetails = ({ onBack }) => {
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

  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleExpand = (index) => {
    setExpandedProduct(expandedProduct === index ? null : index);
  };

  const calculateTotal = () =>
    products.reduce(
      (total, product) =>
        total + parseFloat(product.price.replace("$", "")) * product.quantity,
      0
    );

  const calculateAverageOrderValue = () => {
    const totalOrders = products.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return totalOrders > 0 ? calculateTotal() / totalOrders : 0;
  };

  const orderCount = products.length;

  return (
    <div className="relative w-full h-screen p-6 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2 text-lg font-medium text-[#0B5754]"
            onClick={onBack}
          >
            <IoChevronBackOutline className="text-xl" />
            Back
          </button>
          <h2 className="text-xl font-semibold">Customer Information</h2>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-2xl bg-white p-4 rounded-xl shadow-md mb-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-gray-500">Orders</p>
            <h3 className="text-lg font-semibold">{orderCount}</h3>
          </div>
          <div>
            <p className="text-gray-500">Average Order Value</p>
            <h3 className="text-lg font-semibold">
              ${calculateAverageOrderValue().toFixed(2)}
            </h3>
          </div>
          <div>
            <p className="text-gray-500">Total</p>
            <h3 className="text-lg font-semibold">
              ${calculateTotal().toFixed(2)}
            </h3>
          </div>
        </div>
      </div>

      {/* Product List Section */}
      <div className="max-w-2xl bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Last Order</h3>
        <div className="mb-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl">Ung Mengly</h1>
            <p>31 December 2024</p>
            <p>11:11 AM</p>
          </div>
          <p className="text-gray-500">Paid by Card</p>
        </div>
        <ul className="space-y-4">
          {products.map((product, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-1 rounded-lg shadow-sm"
            >
              <img
                src={product.src}
                alt={`Image of ${product.name}`}
                className="w-10 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4
                  className="text-sm font-semibold cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  {product.name}
                </h4>
                <p className="text-sm text-gray-500">
                  Size: {product.size} | Quantity: {product.quantity}
                </p>
                <p className="text-sm font-medium">{product.price}</p>
                {expandedProduct === index && (
                  <div className="mt-2">
                    <p>Additional product information...</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Customer Summary */}
<div className="w-full md:absolute md:top-4 md:right-10 md:w-80 bg-white p-6 rounded-xl shadow-md md:flex md:flex-col md:gap-4 md:mb-0 mb-6 mt-6">
  <div className="flex items-center gap-2 mb-6">
    <img
      src="/image10.png"
      alt="Customer Avatar"
      className="w-16 h-16 rounded-full border border-gray-300"
    />
    <h2 className="text-xl font-semibold">Ung Mengly</h2>
  </div>
  <div className="mb-3 space-y-2">
    <div>
      <h3 className="font-semibold">Email</h3>
      <p className="text-sm text-[#0B5754]">menglyung44@gmail.com</p>
    </div>
    <div>
      <h3 className="font-semibold">Phone</h3>
      <p className="text-sm text-[#0B5754]">093291982</p>
    </div>
  </div>
  <div className="space-y-4">
    <div>
      <h3 className="font-semibold">Country</h3>
      <p className="text-[#0B5754]">Cambodia</p>
    </div>
    <div>
      <h3 className="font-semibold">City/Province</h3>
      <p className="text-[#0B5754]">Takev</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default CustomerDetails;
