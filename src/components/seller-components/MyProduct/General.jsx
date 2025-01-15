import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import ProductAvailability from "./ProductAvailability"; // Assuming you have this component

const General = ({ formData, setFormData }) => {
  // Handle file input change (for multiple images)
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const updatedImages = [...formData.image];
      for (let i = 0; i < files.length; i++) {
        updatedImages.push(files[i]); // Add new images to the existing array
      }
      setFormData({ ...formData, image: updatedImages }); // Update formData with multiple images
    }
  };

  // Handle cancel image upload
  const handleCancelImage = (index) => {
    const updatedImages = formData.image.filter((_, i) => i !== index); // Remove the selected image
    setFormData({ ...formData, image: updatedImages });
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
            multiple // Allow multiple file selection
          />
          <span className="text-lg font-medium">
            {formData.image.length > 0 ? "Add More Images" : "+ Upload Images"}
          </span>
        </div>

        {/* Display uploaded images */}
        {formData.image.length > 0 && (
          <div className="flex gap-4 mt-4">
            {formData.image.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)} // Preview the image
                  alt={`Product Preview ${index + 1}`}
                  className="h-60 object-contain rounded-lg"
                />
                <button
                  onClick={() => handleCancelImage(index)}
                  className="absolute top-0 right-0 p-2 bg-gray-500 text-white rounded-full"
                  type="button"
                >
                  <IoChevronBackOutline className="text-2xl" />
                </button>
              </div>
            ))}
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
            id="title"
            placeholder="Enter product name"
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
