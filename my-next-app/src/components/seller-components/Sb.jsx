import React from "react";
import Link from "next/link";
import { FaStoreAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlinePointOfSale } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";


  const sidebarItems = [
    { label: "Home", icon: IoHomeSharp, path: "/" },
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
    { label: "Messages", icon: FaPaperPlane, path: "/messages" },
  ];
export default function Sb(){
  return(
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
  );
}