"use client";
import React, { useState } from "react";

const Attributes = () => {
  const [images, setImages] = useState([null, null, null, null]);
  const [sizes, setSizes] = useState([
    { size: "S", added: false },
    { size: "M", added: false },
    { size: "X", added: false },
    { size: "XL", added: false },
  ]);

  // Handle file input for each image slot
  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/") && file.size < 5000000) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file); // Set the preview image
      setImages(newImages);
    } else {
      alert("Invalid file. Please upload an image smaller than 5MB.");
    }
  };

  // Toggle size added/removed
  const toggleSize = (index) => {
    const updatedSizes = [...sizes];
    updatedSizes[index].added = !updatedSizes[index].added;
    setSizes(updatedSizes);

    if (updatedSizes[index].added) {
      alert(`Size "${updatedSizes[index].size}" has been added.`);
    } else {
      alert(`Size "${updatedSizes[index].size}" has been removed.`);
    }
  };

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <h1 className="text-xl mt-2">Local</h1>
      <div>
        <label htmlFor="upc" className="block text-sm font-bold text-gray-700">
          UPC
        </label>
        <input
          id="upc"
          placeholder="Enter the UPC"
          className="mt-1 p-2 w-1/2 border border-black rounded"
        />
      </div>

      <h2 className="flex flex-col text-xl font-medium text-gray-700 mt-4">
        Brand
      </h2>

      <div className="flex gap-4 mb-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-56 h-[100px] flex items-center mb-4 border-2 rounded-lg relative"
          >
            <div className="w-20 h-20 ml-2 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 cursor-pointer relative">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, index)}
                className="opacity-0 absolute inset-0 cursor-pointer"
                id={`productImage${index}`}
                accept="image/*"
              />
              {!image && (
                <div className="flex flex-col items-center text-[#0B5754]">
                  <h2 className="text-5xl font-medium">+</h2>
                  <p className="text-[0.75rem]">Upload Image</p>
                </div>
              )}
              {image && (
                <img
                  src={image}
                  alt={`Product Preview ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              )}
            </div>
            {image && (
              <button
                onClick={() => {
                  const newImages = [...images];
                  newImages[index] = null;
                  setImages(newImages);
                }}
                className="text-red-500 text-xs mt-1 absolute top-2 right-2"
                aria-label={`Remove image ${index + 1}`}
              >
                ✖
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="w-[25rem] bg-gray-100 p-4 rounded-lg">
        <p className="font-bold">Size</p>
        <p className="text-sm">Add or remove size options on your product:</p>
        <ul className="mt-4 flex gap-4 flex-wrap">
          {sizes.map((item, index) => (
            <li
              key={index}
              className={`w-[60px] h-[60px] flex items-center justify-center text-sm border-2 border-dashed rounded-lg cursor-pointer ${
                item.added
                  ? "border-green-400 bg-green-100"
                  : "border-gray-400 bg-white"
              } relative`}
              onClick={() => toggleSize(index)}
            >
              <span className="text-sm">{item.size}</span>
              <button
                className={`absolute -top-2 -right-1 text-xs w-5 h-5 flex items-center justify-center rounded-full ${
                  item.added
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {item.added ? "−" : "+"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Attributes;
