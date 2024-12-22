import React, { useState } from "react";
import ProductAvailability from "./ProductAvailability";

const General = () => {
  const [image, setImage] = useState(null);

  // Handle file input
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview image
    }
  };

  return (
    <div className=" relative p-6  bg-gray-50 rounded-lg ">
      {/* Product Images Section */}
      <div className="flex flex-col gap-4 mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Product Images
        </label>
        <div className="w-60 h-60 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 cursor-pointer relative">
          <input
            type="file"
            onChange={handleFileChange}
            className="opacity-0 absolute inset-0 cursor-pointer"
            id="productImage"
            accept="image/*"
          />
          <span className="text-lg font-medium">+ Upload Images</span>
        </div>
        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt="Product Preview"
              className="w-60 h-auto object-contain rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Product Details Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label
            htmlFor="nameProduct"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="nameProduct"
            placeholder="Enter product name"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div>
          <label
            htmlFor="sku"
            className="block text-sm font-medium text-gray-700"
          >
            SKU
          </label>
          <input
            type="text"
            id="sku"
            placeholder="Enter SKU"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div>
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-700"
          >
            Weight (Kg)
          </label>
          <input
            type="number"
            id="weight"
            placeholder="Enter weight"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          rows="4"
          placeholder="Enter product description"
          className="mt-1 p-2 w-full border border-gray-300 rounded"
        ></textarea>
      </div>

      <div className=" absolute right-8 top-10">
        <ProductAvailability />
      </div>
    </div>
  );
};

export default General;
