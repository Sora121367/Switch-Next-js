import React from "react";

const CustomerProduct = ({ title, description, price, image }) => {
  return (
    <div className="w-[20rem] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col">
        {/* Image Section */}
        <div className="w-[20rem] h-[22rem] overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
          />
        </div>

        {/* Product Info Section */}
        <div className="p-4">
          <p className="text-gray-500 mb-1">{description}</p>
          <p className="font-bold text-xl mb-1">{title}</p>
          <p className="font-bold text-lg text-teal-800">{price}</p>
          <button className="mt-3 bg-[#0B5754] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerProduct;
