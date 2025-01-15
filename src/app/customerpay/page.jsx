"use client";
import React from "react";
import CheckoutNav from "@/components/Checkout/CheckoutNav";
import ShoppingCart from "@/components/Customerpay/ShoppingCart";
import Footer from "@/components/Shoppayment/Footer";

const customerpay = () => {
  return (
    <div className="h-screen w-full relative">
      <CheckoutNav />
      <div className="w-full lg:w-1/3 ml-10 px-4 lg:px-0">
        <ShoppingCart />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default customerpay;
