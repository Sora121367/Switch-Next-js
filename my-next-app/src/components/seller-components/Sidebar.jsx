import React from "react";
import Link from "next/link";
import { FaStoreAlt } from "react-icons/fa";



const SidebarItem = ({ icon: Icon, label, path, isActive, subItems, activeItem, setActiveItem }) => (
  <li className="mb-4 list-none">
    {/* The wrapper div is no longer necessary to handle the click */}
    <div
      className={`flex items-center gap-2 p-2 cursor-pointer rounded-md ${
        isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:text-blue-600"
      }`}
    >
      <Link href={path} className="flex items-center gap-2 w-full" onClick={() => setActiveItem(label)}>
        {/* If an icon is passed, render it */}
        {Icon && <Icon className="text-xl" />}
        <span>{label}</span>
      </Link>
    </div>
    {subItems && (
      <ul className="ml-6 mt-2">
        {subItems.map((subItem, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 p-2 cursor-pointer rounded-md ${
              activeItem === subItem.label
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
            onClick={() => setActiveItem(subItem.label)} // Set the active state on click
          >
            <Link href={subItem.path} className="flex items-center gap-2 w-full">
              <span>{subItem.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
);



const Sidebar = ({ items, activeItem, setActiveItem }) => (
  <aside className="w-[300px] h-screen max-sm:hidden flex flex-col p-4 shadow-md rounded-tl-xl bg-white overflow-hidden">
    {items.map((item, index) => (
      <SidebarItem
        key={index}
        icon={item.icon}
        label={item.label}
        path={item.path}
        subItems={item.subItems}
        isActive={activeItem === item.label}
        activeItem={activeItem} // Pass down active item
        setActiveItem={setActiveItem} // Pass down setter for updating active item
      />
    ))}
    <div className="mt-4">
      <label htmlFor="channel-select" className="text-gray-700 text-sm">
        Your Channels
      </label>
      <div className="relative mt-2">
        <select
          id="channel-select"
          name="channel"
          className="w-full p-2 px-8 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="online-store">Online Store</option>
          <option value="blog-posts">Blog Posts</option>
          <option value="pages">Pages</option>
          <option value="navigation">Navigation</option>
          <option value="preference">Preference</option>
        </select>
        <FaStoreAlt className="absolute top-1/2 transform -translate-y-1/2 left-1 text-lg text-gray-400 pointer-events-none" />
      </div>
    </div>
  </aside>
);


export default Sidebar;
