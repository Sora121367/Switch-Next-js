import React from "react";
import Link from "next/link";
import Image from "next/image";

const sidebarItems = [
  { label: "Home", icon: "./Dashboard.svg", path: "/admin-dashboard" },
  { label: "Categories", icon: "./Categories.svg", path: "/categories" },
  { label: "Reports", icon: "./Report.svg", path: "/reports" },

];

export default function SidebarAdmin() {
  return (
    <div className="mt-4 text-sm pl-2 lg:w-60 w-16 bg-gray-50 lg:bg-white shadow-md h-screen">
      {sidebarItems.map((item, index) => (
        <div key={index} className="group my-2">
          <Link
            href={item.path}
            className="flex items-center gap-2 p-2 text-gray-900 hover:text-white hover:bg-blue-700 rounded-lg transition-all duration-300"
          >
            <Image
              src={item.icon}
              className="transition-transform group-hover:scale-110"
              alt={item.label}
              width={27}
              height={27}
            />
            <span className="hidden lg:block font-semibold text-sm">
              {item.label}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
