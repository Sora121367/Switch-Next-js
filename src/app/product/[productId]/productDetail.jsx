"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import Link from "next/link"; // Import Link for navigation

const ProductDetail = ({
  title,
  description,
  price,
  image = [],
  instock,
  size,
}) => {
  const fallbackImage = "/default-image.png"; // Default fallback image

  // Initialize state with the first image or fallback if none exist
  const [selectedImage, setSelectedImage] = useState(image[0] || fallbackImage);
  const [smallImages, setSmallImages] = useState(
    Array.isArray(image) && image.length > 0 ? image : [fallbackImage, fallbackImage, fallbackImage]
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const [showAddMore, setShowAddMore] = useState(false);

  // Handle image click to update the selected image
  const handleImageClick = (clickedImage) => setSelectedImage(clickedImage);

  // Ensure `size` is always an array
  const sizes = Array.isArray(size) ? size : [size];

  // Handle size click to update selected size
  const handleSizeClick = (size) => setSelectedSize(size);

  // Handle Add to Bag click
  const handleAddToBagClick = () => setShowAddMore(true);

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row items-center md:items-start mt-20">
        {/* Image Container */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:ml-40">
          <div className="relative w-[25rem] h-[34rem] border-gray-300 rounded-2xl overflow-hidden flex items-center justify-center bg-white">
            <Image
              src={selectedImage}
              alt="Product"
              width={620}
              height={620}
              className="rounded-2xl object-cover"
              unoptimized
            />
          </div>

          {/* Small Images */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            {smallImages.map((smallImage, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(smallImage)}
                className={`relative w-24 h-24 bg-slate-300 border border-gray-300 rounded-lg overflow-hidden cursor-pointer ${
                  selectedImage === smallImage ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <Image
                  src={smallImage}
                  alt={`Small Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white w-full md:w-1/2 p-4 md:pl-8 rounded-2xl mt-4 md:mt-4 md:mr-80">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-xl text-gray-700 mt-2">${price}</p>

          {/* Size Selection */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <div className="flex gap-2">
              {sizes.length > 0 ? (
                sizes.map((s, index) => (
                  <div
                    key={index}
                    onClick={() => handleSizeClick(s)}
                    className={`w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-sm font-medium cursor-pointer shadow-md hover:bg-gray-200 ${
                      selectedSize === s ? "bg-blue-500 text-white" : ""
                    }`}
                  >
                    {s}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No sizes available</p>
              )}
            </div>
          </div>

          {/* Stock Status */}
          <div className="mt-6 flex flex-col gap-1">
            <p className={instock ? "text-green-600" : "text-red-600"}>
              {instock ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          {/* Add to Bag / Checkout Buttons */}
          <div className="mt-6 flex gap-4">
            {!showAddMore ? (
              <button
                className={`bg-green-950 text-white py-2 px-12 rounded-md hover:bg-green-800 ${
                  !instock || !selectedSize
                    ? "bg-gray-400 cursor-not-allowed"
                    : ""
                }`}
                disabled={!instock || !selectedSize}
                onClick={handleAddToBagClick}
              >
                Add to Bag
              </button>
            ) : (
              <div className="flex flex-col gap-3 ">
                <button
                  className="bg-gray-300 text-black py-2 px-12 rounded-md hover:bg-gray-400"
                  onClick={() => alert("Adding more items")}
                >
                  Add More
                </button>
                <Link href="/customerpay">
                  <button
                    className="bg-blue-600 text-white py-2 px-12 rounded-md hover:bg-blue-500"
                    onClick={() => alert("Proceeding to checkout")}
                  >
                    Check Out
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Product Description */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Product Details</h2>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>

          {/* Social Media Links */}
          <hr className="border-t-2 border-gray-300 my-4 w-full" />
          <div className="flex space-x-4 mt-4 items-center justify-center">
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram size={24} className="text-gray-600 hover:text-red-800 transition-colors" />
            </a>
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook size={24} className="text-gray-600 hover:text-blue-800 transition-colors" />
            </a>
            <a href="https://www.telegram.com" target="_blank" aria-label="Telegram">
              <FaTelegram size={24} className="text-gray-600 hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
