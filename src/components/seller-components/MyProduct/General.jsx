import React, { useState, useEffect } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import ProductAvailability from "./ProductAvailability"; // Assuming you have this component

const General = ({ formData, setFormData }) => {
  const [image, setImage] = useState(""); // For the image preview

  useEffect(() => {
    // Sync with parent formData to reset the local image preview
    if (!formData.image) {
      setImage(""); // Clear image preview when formData.image is reset
    }
  }, [formData.image]);

  // Handle file input
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview image
      setFormData({ ...formData, image: file }); // Update the formData state with the file
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle cancel image upload
  const handleCancelImage = () => {
    setImage(null); // Reset the preview
    setFormData({ ...formData, image: null }); // Remove image from parent state
  };

  return (
    <form className="relative p-6 bg-gray-50 rounded-lg">
      {/* Product Images Section */}
      <div className="relative flex flex-col gap-4 mb-6">
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
          <span className="text-lg font-medium">
            {image ? "Replace Image" : "+ Upload Image"}
          </span>
        </div>

        {image && (
          <>
            <div className="absolute mt-9">
              <img
                src={image}
                alt="Product Preview"
                className="h-60 object-contain rounded-lg"
              />
            </div>
            <button
              onClick={handleCancelImage}
              className="absolute top-3 left-[15rem] p-5"
              type="button"
            >
              <IoChevronBackOutline className="text-3xl hover:text-white" />
            </button>
          </>
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
            id="title"
            placeholder="Enter product name"
            onChange={handleInputChange}
            value={formData.title || ""}
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
          value={formData.description || ""}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded"
        ></textarea>
      </div>

      {/* Product Availability Section */}
      <div className="absolute right-8 top-10">
        <ProductAvailability formData={formData} setFormData={setFormData} />
      </div>
    </form>
  );
};

export default General;
