import React from "react";
import BookMarkButton from "./BookmarkButton";

const CustomerProduct = ({ title, description, price, image }) => {
  return (
    <div className="w-[20rem] rounded-lg bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col">
        {/* Image Section */}
        <div className="w-[20rem] h-[14rem] flex items-center justify-center ">
          <img
            src={image}
            className="w-[13rem]"
          />
        </div>

        {/* Product Info Section */}
        <div className="p-3">
          <p className="text-gray-500 text-sm mb-1">{description}</p>
          <p className="font-bold text-lg mb-1">{title}</p>
          <p className="font-bold text-md text-teal-800">${price}</p>
          <button className="mt-2 bg-[#0B5754] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Add to Cart
          </button>
          <BookMarkButton/>
        </div>
      </div>
    </div>
  );
};

export default CustomerProduct;
