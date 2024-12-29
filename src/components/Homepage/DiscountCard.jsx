import React from "react";

const DiscountCard = () => {
  return (
    <div className="w-[540px] h-[172px] max-sm:w-[425px] max-sm:h-[160px] flex items-center justify-between px-3
     rounded-[60px] border-[1px] border-black bg-white ">
        <img src="/image4.png" className="h-[141px]" />
      {/* Text and Button Section */}
      <div className="flex flex-col justify-center space-y-4 mr-[125px] max-sm:mr-3">
        {/* Title and Description */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">New!</h2>
          <p className="text-sm text-gray-600">
            Get 25% off with code <strong>SUMMER25</strong> <br />
            Check out the latest
          </p>
        </div>

        {/* Button */}
        <button className="w-[218px] h-[38px] max-sm:w-[190px] bg-[#0B5754] text-white rounded-[20px] hover:bg-[#086d68] transition">
          Explore
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;
