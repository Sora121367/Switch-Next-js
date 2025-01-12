"use client";
import React from "react";
import Footer from "@/components/Shoppayment/Footer";
import Checkoutpage from "@/components/Checkoutpage/Checkoutpage";
import CustomerHeader from "@/components/customerpage/CustomerHeader";

const checkoutpage = () => {
  return (
    <div className="h-screen w-full relative">
        <CustomerHeader/>

      <div className="w-full lg:w-1/3 ml-10 px-4 lg:px-0">
        <Checkoutpage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default checkoutpage;
