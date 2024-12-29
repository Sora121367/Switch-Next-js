import React from "react";

const BannerCard = () => {
  return (
    <div
      className="w-[530px] h-[172px] max-sm:w-[425px]  max-sm:h-[160px] flex items-center justify-between px-3
     rounded-[60px] border-[2px] border-black bg-white "
    >
      {/* Text and Button Section */}
      <div className="flex flex-col justify-center space-y-6 ml-4">
        {/* Title and Description */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">Discover <br />local shops</h2>
          <p className="text-sm text-black">
          Find the best shops near
          </p>
        </div>

        {/* Button */}
        <button className="w-[218px] h-[38px] max-sm:w-[180px]  bg-[#0B5754] text-white rounded-[20px] hover:bg-[#086d68] transition">
          Learn more
        </button>
      </div>
      <div className="">
        <img src="/image5.png" className="w-[246px]" />
      </div>
    </div>
  );
};

export default BannerCard;
