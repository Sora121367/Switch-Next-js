"use client";

import { useState } from "react";
import { useCart } from "@/components/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const ProductDetail = ({
  title,
  description,
  price,
  image = [],
  instock,
  size,
}) => {
  const { cart, addToCart } = useCart(); // Get cart and function from context
  const [selectedImage, setSelectedImage] = useState(image[0] || "/default-image.png");
  const [selectedSize, setSelectedSize] = useState(null);
  const [showAddMore, setShowAddMore] = useState(false);

  // Handle image selection
  const handleImageClick = (clickedImage) => setSelectedImage(clickedImage);

  // Handle size selection
  const handleSizeClick = (size) => setSelectedSize(size);
  const handleAddToBagClick = async () => {
    if (selectedSize && instock) {
      const product = { title, price, size: selectedSize, image: selectedImage };
  
      const formData = new URLSearchParams();
      formData.append("productId", title);  // Replace with actual product ID if necessary
      formData.append("quantity", "1");
      formData.append("title", title);
      formData.append("price", price.toString());
      formData.append("size", selectedSize);
      formData.append("image", selectedImage);
  
      try {
        const response = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: formData.toString(),  // Send the form data as a URL-encoded string
        });
  
        if (!response.ok) {
          const errorData = await response.json();
        } else {
          addToCart(product);
          setShowAddMore(true);
        }
      } catch (error) {
        console.error("Error adding item to cart:", error);
        alert(`Error adding item to cart: ${error.message || 'Unknown error'}`);
      }
    } else {
      console.error("Please select a size and ensure the product is in stock.");
      alert("Please select a size and ensure the product is in stock.");
    }
  };
  
  
  // Handle adding more items
  const handleAddMoreClick = () => {
    if (selectedSize && instock) {
      addToCart({ title, price, size: selectedSize, image: selectedImage }); // Add another of the same item to cart
    }
  };

  const sizes = Array.isArray(size) ? size : [size]; // Ensure size is always an array

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
            {image.map((smallImage, index) => (
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
                  !instock || !selectedSize ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
                disabled={!instock || !selectedSize}
                onClick={handleAddToBagClick}
              >
                Add to Bag
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href="/customerpage">
                <button
                  className="bg-gray-300 text-black py-2 px-12 rounded-md hover:bg-gray-400"
                >
                  Add More
                </button></Link>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
