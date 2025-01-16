"use client";
import React from "react";
import CustomerHeader from "@/components/customerpage/CustomerHeader";
import CheckoutProduct from "@/components/Checkout/CheckoutProduct";


const checkout = () => {
  return (
    <div className="bg-[#1E1E1E] h-screen relative">
      <CustomerHeader/>
      <div className="bg-slate-100 w-full h-full ">
        <CheckoutProduct/>
      </div>
    </div>
  );
};

export default checkout;
