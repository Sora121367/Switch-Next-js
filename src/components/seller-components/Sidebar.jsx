"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlinePointOfSale } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";

const sidebarItems = [
  { label: "Home", icon: IoHomeSharp, path: "/home" },
  { label: "My Products", icon: GiBoxUnpacking, path: "/my-products" },
  {
    label: "My Sales",
    icon: MdOutlinePointOfSale,
    path: "/orders",
    subItems: [
      { label: "Orders", path: "/orders" },
      { label: "Customers", path: "/customers" },
    ],
  },
  { label: "Discounts", icon: RiDiscountPercentFill, path: "/discounts" },
];

export default function Sb() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="lg:hidden flex items-center justify-between p-4 text-gray">
        <span className="text-lg font-bold">Menu</span>
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0  h-full p-4 bg-gray-100 shadow-lg z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none lg:block`}
      >
        <div className="mt-4 text-sm pl-2">
          {sidebarItems.map((item, index) => (
            <div key={index} className="group">
              {/* Main Item */}
              <Link
                href={item.path}
                className="flex items-center p-2 text-gray-900 hover:text-white hover:bg-blue-700 rounded-lg"
              >
                <item.icon className="mr-3 text-lg" />
                <span>{item.label}</span>
              </Link>
              {/* Sub Items */}
              {item.subItems && (
                <div className="ml-6 mt-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.path}
                      className="block p-2 text-gray-900 hover:text-white hover:bg-blue-700 rounded-lg"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
