import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";
import General from "./General";
import Attributes from "./Attributes";
import Pickup from "./Pickup";

const AddProduct = ({ onBack }) => {
  const [activeItem, setActiveItem] = useState("general");

  const tabs = [
    { name: "general", label: "General" },
    { name: "attributes", label: "Attributes" },
    { name: "pickup", label: "Pickup" },
  ];

  const renderContent = () => {
    switch (activeItem) {
      case "general":
        return <General />;
      case "attributes":
        return <Attributes />;
      case "pickup":
        return <Pickup />;
      default:
        return <div>Invalid Tab</div>;
    }
  };

  return (
    <div>
      {/* Main Content Section */}
      <section className="p-6 flex justify-between gap-2 items-center">
        {/* Back Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IoChevronBackOutline className="text-lg" />
            <button
              className="text-lg font-medium text-[#0B5754]"
              onClick={onBack}
            >
              Back
            </button>
          </div>
          <h2 className="text-xl font-semibold">Add New Products</h2>
        </div>

        {/* Buttons Section */}
        <div className="space-x-5 flex items-center">
          <button className="bg-[#0B5754] w-[8rem] h-[2.4rem] text-white rounded hover:bg-[#084d4b]">
            Save Product
          </button>
          <button className="w-[9rem] h-[2.4rem] rounded border border-black hover:bg-slate-500">
            Duplicate Product
          </button>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="p-10 w-full flex flex-col">
        {/* Tabs */}
        <div className="flex gap-6 mb-6">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={`#${tab.name}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(tab.name);
              }}
              className={`btn-active ${
                activeItem === tab.name
                  ? "text-white bg-[#0B5754]"
                  : "text-black hover:text-[#0B5754] hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-grow p-6 rounded-lg shadow-md bg-white">
          {renderContent()}
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
