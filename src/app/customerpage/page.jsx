"use client";
import React from "react";
import CustomerHeader from "@/components/customerpage/CustomerHeader";
import CustomerSection from "@/components/customerpage/CustomerSection";
// import Wishlist from "@/components/customerpage/Wishlist";

const CustomerPage = () => {
  return (
    <div className="bg-[#1E1E1E] h-screen relative">
      <CustomerHeader />

      {/* Main Content Section */}
      <div>
        <CustomerSection />
      </div>

    </div>
  );
};

export default CustomerPage;
