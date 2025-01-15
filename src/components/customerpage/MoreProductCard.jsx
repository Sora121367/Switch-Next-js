import React from "react";

const MoreProductCard = ({ title, price, image }) => {
  return (
    <div>
      <div className="w-[20rem] bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col">
          {/* Image Section */}
          <div className="w-[20rem] h-[24rem] flex items-center justify-center overflow-hidden">
            <img src={image} className="w-[12rem]" />
          </div>
        </div>
      </div>
       {/* Product Info Section */}
       <div className="flex items-center justify-center flex-col p-3">
          <p className="font-semibold text-lg mb-1">{title}</p>
          <p className="font-bold text-md text-teal-800">${price}</p>
        </div>
    </div>
  );
};

export default MoreProductCard;
