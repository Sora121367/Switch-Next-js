"use client";
import React from "react";
import CheckoutNav from "@/components/Checkout/CheckoutNav";
import Checkoutpayment from "@/components/Shoppayment/Checkoutpayment";
const shoppayment = () => {
  return (
    <div className=" h-screen relative">
      <CheckoutNav/>
      <div className="bg-slate-100 w-full h-full ">
        <Checkoutpayment/>
      </div>
    </div>
    
  );
};

export default shoppayment;
