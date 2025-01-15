"use client";
import React from "react";
import CheckoutNav from "@/components/Checkout/CheckoutNav";
import CheckoutProduct from "@/components/Checkout/CheckoutProduct";


const checkout = () => {
  return (
    <div className=" h-screen relative">
      <CheckoutNav/>
      <div className="bg-slate-100 w-full h-full ">
        <CheckoutProduct/>
      </div>
    </div>
  );
};

export default checkout;
