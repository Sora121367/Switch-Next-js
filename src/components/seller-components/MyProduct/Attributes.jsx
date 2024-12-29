"use client";
import React, { useState } from "react";
import ProductAvailability from "./ProductAvailability";

const Attributes = () => {
  const [images, setImages] = useState([null, null, null, null]);

  // Handle file input for each image slot
  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file); // Set the preview image
      setImages(newImages);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-xl mt-2">Local</h1>
      <div>
        <label className="block text-sm font-bold text-gray-700">UPC</label>
        <input
          id="upc"
          placeholder=""
          className="mt-1 p-2 w-1/2 border border-black rounded"
        />
      </div>

      <h2 className="flex flex-col text-xl  font-medium text-gray-700 ">
        Brand
      </h2>

      <div className="flex  gap-4 mb-6">
        {/* Repeat the file input 4 times */}
        {images.map((image, index) => (
          <div
            key={index}
            className="w-56 h-[100px] flex items-center mb-4 border-2 rounded-lg"
          >
            <div className="w-20 h-20 ml-2 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 cursor-pointer relative">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, index)}
                className="opacity-0 absolute inset-0 cursor-pointer"
                id={`productImage${index}`}
                accept="image/*"
              />
              <div className="flex flex-col items-center text-[#0B5754]">
                <h2 className="text-5xl font-medium">+</h2>
                <p className="text-[0.75rem] ">uplaod image</p>
              </div>
            </div>
            <h3 className="text-sm px-3 mb-16">Your brand name</h3>

            {/* Show image preview if it exists */}
            {image && (
              <div className="mt-4">
                <img
                  src={image}
                  alt={`Product Preview ${index + 1}`}
                  className="w-60 h-auto object-contain rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <ProductAvailability />
    </div>
  );
};

export default Attributes;
