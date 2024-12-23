'use client';

import React from "react";
import { FiEdit } from "react-icons/fi";

const StoreSection = () => {
  return (
    <div className="w-[500px] h-[9.5rem] flex items-center p-5 rounded-lg cursor-pointer shadow-md">
      <img src="/image11.png" alt="logo" className="w-[4.5rem] mr-4" />
      <div className="flex flex-col">
        <h1 className="font-semibold text-lg">Shoes Store</h1>
        <p className="text-sm">
          0 <span className="text-gray-500">Follower</span>
        </p>
      </div>
      <div className="ml-auto text-xl">
        <FiEdit />
      </div>
    </div>
  );
};

export default StoreSection;
