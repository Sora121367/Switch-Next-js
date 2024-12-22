import { useState } from "react";
import React from "react";
import ButtonSwitch from "./ButtonSwitch";

const ProductAvailability = () => {
  const [price, setPrice] = useState("");
 

 

  return (
    <div className="w-[12rem] space-y-6">
      {/* Pricing Section */}
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Pricing
        </label>
        <div className="w-full flex items-center mt-2 border border-gray-300 rounded px-2 py-1">
          <span className="text-gray-500">$</span>
          <input
            type="number"
            id="price"
            aria-label="Enter product price"
            placeholder="00.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="ml-2 w-full border-none focus:ring-0 text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Availability Section */}
      <div>
        <label
          htmlFor="availability"
          className="block text-sm font-medium text-gray-700"
        >
          Product Availability
        </label>
         <ButtonSwitch/>
      </div>
    </div>
  );
};

export default ProductAvailability;
