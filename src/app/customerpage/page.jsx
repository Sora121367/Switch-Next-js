"use client";
import React from "react";
import CustomerHeader from "@/components/customerpage/CustomerHeader";
import CustomerSection from "@/components/customerpage/CustomerSection";

const Customerpage = () => {
  return (
    <div className="bg-[#1E1E1E] h-screen relative">
      <CustomerHeader />

      <div className="">
           <CustomerSection/>
      </div>
    </div>
  );
};

export default Customerpage;
