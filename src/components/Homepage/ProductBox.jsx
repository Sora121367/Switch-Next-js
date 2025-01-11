import React from 'react';

const ProductBox = () => {
  return (
    <div className="relative bg-white border rounded-2xl p-4">
      <div className="grid gap-6">
        {/* Top Image - Left Aligned */}
        <div className="flex flex-col items-start p-4 bg-slate-100 rounded-2xl">
          <div className="mb-2">
            <h1 className="text-xl font-bold">Discover local shops</h1>
            <p className="text-sm text-gray-500">Find the best shops near</p>
          </div>
          <img
            src="image5.png"
            alt="Image 1"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <button className="mt-2 bg-green-950 text-white py-1 px-4 rounded-2xl text-sm">
            Learn More
          </button>
        </div>
        {/* Bottom Image - Right Aligned */}
        <div className="flex flex-col items-end p-4 bg-slate-100 rounded-2xl">
          <div className="mb-2 text-right">
            <h1 className="text-xl font-bold text-black0">New!</h1>
            <p className="text-sm text-gray-500">Get 25% off with code <span className="font-semibold">SUMMER25</span></p>
            <p className="text-sm text-gray-500">Check out the latest</p>
          </div>
          <img
            src="image4.png"
            alt="Image 2"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <button className="mt-2 bg-green-950 text-white py-1 px-4 rounded-2xl text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
