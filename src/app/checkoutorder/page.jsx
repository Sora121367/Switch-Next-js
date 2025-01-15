"use client";
import React from "react";
import Footer from "@/components/Shoppayment/Footer";
import Checkoutpage from "@/components/Checkoutpage/Checkoutpage";
import CustomerHeader from "@/components/customerpage/CustomerHeader";
import Checkoutorder from "@/components/Checkoutorder/Checkoutorder";

const checkoutorder = () => {
  return (
    <div className="h-screen w-full relative">
        <CustomerHeader/>

      <div className="w-full ">
        <Checkoutorder />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default checkoutorder;
