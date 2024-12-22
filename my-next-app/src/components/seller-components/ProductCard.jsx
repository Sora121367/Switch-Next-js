import React from "react";
const ProductCard = ({ product }) => {
  return (
    <div className="shadow-md rounded-lg w-64 ">
      <img
        src={product.img}
        alt={product.title}
        className=" w-full object-cover mb-4"
      />
       <div className=" bg-[#1E1E1E] w-full text-white flex  flex-col items-center">
        <h2 className="text-lg font-bold mb-1">{product.title}</h2>
        <p className="text-lg font-semibold">{product.price}</p>
      </div>
      {/* <button className="bg-blue-500 text-white rounded-lg mt-4 py-2 px-4 w-full hover:bg-blue-600">
        Add to Cart
      </button> */}
    </div>
    
  );
};

export default ProductCard;
