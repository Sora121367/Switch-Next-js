import React from "react";

const CustomerProduct = ({ title, description, price, image }) => {
  return (
    <div className="w-[20rem] bg-teal-100 rounded-lg shadow-md">
      <div className="flex flex-col">
        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-md"
        />
        {/* Product Info */}
        <div className="p-4">
          <p className="text-gray-500 mb-1">{description}</p>
          <p className="font-bold text-xl mb-1">{title}</p>
          <p className="font-bold text-lg">{price}</p>
          <button className="mt-3 bg-[#0B5754] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerProduct;
