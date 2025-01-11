"use client";
import React from "react";

const Attributes = ({ formData, setFormData }) => {
  const toggleSize = (size) => {
    const updatedSizes = [...formData.size];
    if (updatedSizes.includes(size)) {
      // Remove size from the selected sizes
      setFormData((prevFormData) => ({
        ...prevFormData,
        size: updatedSizes.filter((item) => item !== size),
      }));
    } else {
      // Add size to the selected sizes
      updatedSizes.push(size);
      setFormData((prevFormData) => ({
        ...prevFormData,
        size: updatedSizes,
      }));
    }
  };

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <h1 className="text-xl mt-2">Local</h1>

      {/* Size Selection */}
      <div className="w-[25rem] bg-gray-100 p-4 rounded-lg">
        <p className="font-bold">Size</p>
        <p className="text-sm">Add or remove size options on your product:</p>
        <ul className="mt-4 flex gap-4 flex-wrap">
          {["S", "M", "L", "XL"].map((size) => (
            <li
              key={size}
              className={`w-[60px] h-[60px] flex items-center justify-center text-sm border-2 border-dashed rounded-lg cursor-pointer ${
                formData.size.includes(size)
                  ? "border-green-400 bg-green-100"
                  : "border-gray-400 bg-white"
              } relative`}
              onClick={() => toggleSize(size)}
            >
              <span className="text-sm">{size}</span>
              <button
                className={`absolute -top-2 -right-1 text-xs w-5 h-5 flex items-center justify-center rounded-full ${
                  formData.size.includes(size)
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {formData.size.includes(size) ? "−" : "+"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Attributes;
