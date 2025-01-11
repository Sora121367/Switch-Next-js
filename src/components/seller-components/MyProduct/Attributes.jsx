"use client";
import React, { useEffect, useState } from "react";

const Attributes = ({ formData, setFormData }) => {

  useEffect(() => {
    // Ensure the formData includes the selected sizes on load
    if (!formData.size) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        size: [],
      }));
    }
  }, [formData.size, setFormData]);

  const toggleSize = (size) => {
    const updatedSizes = [...formData.size];
    if (updatedSizes.includes(size)) {
      // Remove size from selected sizes
      setFormData((prevFormData) => ({
        ...prevFormData,
        size: updatedSizes.filter((item) => item !== size),
      }));
    } else {
      // Add size to selected sizes
      updatedSizes.push(size);
      setFormData((prevFormData) => ({
        ...prevFormData,
        size: updatedSizes,
      }));
    }
  };


  return (
    <div className="flex flex-col gap-y-4 p-4">
      <h1 className="text-xl mt-2">Attributes</h1>

      {/* UPC Input */}
      <div>
        <label htmlFor="upc" className="block text-sm font-bold text-gray-700">
          UPC
        </label>
        <input
          id="upc"
          placeholder="Enter the UPC"
          value={formData.upc || ""}
          onChange={(e) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              upc: e.target.value,
            }))
          }
          className="mt-1 p-2 w-1/2 border border-black rounded"
        />
      </div>


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
              }`}
              onClick={() => toggleSize(size)}
            >
              <span className="text-sm">{size}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Attributes;
