import React from "react";

const CategoryCard = () => {
  return (
    <div className="w-[220px] h-[330px] md:w-[320px] md:h-[430px] rounded-[25px] flex flex-col items-center justify-between bg-[#0B5754] ml-4 p-4 relative">
      {/* Title and Subtitle */}
      <div className="text-center py-4 space-y-2">
        <h1 className="text-2xl md:text-4xl font-bold text-white">Dog Treat</h1>
        <p className="text-sm md:text-xl text-white">by animal</p>
      </div>

      {/* Image */}
      <div className="w-[140px] h-[140px] md:w-[184px] md:h-[184px] bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
        <img
          src="src/assets/image1.png"
          alt="Dog treat"
          className="w-full h-full object-cover"
        />
        {/* Discount Badge */}
        <div className="absolute -mt-[130px] md:-mt-[160px] right-7 md:right-10 w-[54px] h-[54px] md:w-[74px] md:h-[74px] bg-[#FA8F21] rounded-full flex flex-col items-center justify-center text-white text-sm md:text-xl font-bold shadow-lg">
          <p>OFF</p>
          <h3>50%</h3>
        </div>
      </div>

      {/* Button */}
      <button className="w-[150px] md:w-[250px] py-1 md:py-2 bg-white text-black text-sm md:text-lg rounded-md hover:bg-white/10 transition-all">
        Shop Now
      </button>
    </div>
  );
};

export default CategoryCard;
