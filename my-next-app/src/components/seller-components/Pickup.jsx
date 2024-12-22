import React from "react";
import ProductAvailability from "./ProductAvailability";

const Pickup = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <div className="p-5">
        <div className="flex flex-col gap-10">
          {/* Weight and Dimension Input */}
          <div className="flex flex-col w-1/3">
            <label
              htmlFor="upc"
              className="block text-sm font-bold text-gray-700"
            >
              Weight and Dimension
            </label>
            <input
              id="upc"
              placeholder="Enter weight and dimension"
              className="mt-1 p-1 w-full h-10 border border-black rounded text-gray-800 placeholder-gray-400 text-sm"
            />
          </div>

          {/* Inline Dimension Inputs */}
          <div className="flex flex-1 items-center gap-3">
            <div className="flex flex-col w-1/4"> {/* Adjusted Width */}
              <label htmlFor="length" className="block text-xs text-gray-500">
                Length (cm)
              </label>
              <input
                type="number"
                id="length"
                placeholder="00.00"
                className="mt-1 w-full h-10 border border-gray-300 rounded-lg px-2 text-gray-800 placeholder-gray-400 text-center text-sm"
              />
            </div>

            <div className="flex flex-col w-1/4"> {/* Adjusted Width */}
              <label htmlFor="width" className="block text-xs text-gray-500">
                Width (cm)
              </label>
              <input
                type="number"
                id="width"
                placeholder="00.00"
                className="mt-1 w-full h-10 border border-gray-300 rounded-lg px-2 text-gray-800 placeholder-gray-400 text-center text-sm"
              />
            </div>

            <div className="flex flex-col w-1/4"> {/* Adjusted Width */}
              <label htmlFor="height" className="block text-xs text-gray-500">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                placeholder="00.00"
                className="mt-1 w-full h-10 border border-gray-300 rounded-lg px-2 text-gray-800 placeholder-gray-400 text-center text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="w-[90%] py-10 px-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="block text-lg font-bold text-gray-700">
              Payment method
            </h1>
            <p className="text-sm text-gray-600">
              Add or remove your payment method that can only accept with your Pay
            </p>
          </div>
          <button className="w-36 h-10 rounded-full bg-black text-white hover:bg-black/90 transition-all">
            Remove bank
          </button>
        </div>

        <div className="flex gap-4 mt-3 flex-wrap">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
            <img src="src/assets/ABA.png" alt="ABA Bank" className="w-6" />
            <span>ABA Bank</span>
          </div>

          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
            <img src="src/assets/Acleda.png" alt="ACleda Bank" className="w-6" />
            <span>ACleda Bank</span>
          </div>

          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
            <img src="src/assets/Wing.png" alt="Wing Bank" className="w-6" />
            <span>Wing Bank</span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-2">
        <ProductAvailability />
      </div>
    </div>
  );
};

export default Pickup;
