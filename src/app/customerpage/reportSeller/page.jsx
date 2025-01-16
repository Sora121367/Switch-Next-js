"use client";
import React from "react";
import Mainpart from "@/components/Reportseller/Mainpart";
import CustomerHeader from "@/components/customerpage/CustomerHeader";
const reportseller = () => {
  return (
    <div className="bg-[#1E1E1E] h-screen relative">
      <CustomerHeader/>
      <Mainpart/>
    </div>
    
  );
};

export default reportseller;
