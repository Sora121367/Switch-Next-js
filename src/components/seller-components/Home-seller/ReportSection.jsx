"use client";

import React, { useState } from "react";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { MdPersonAddAlt1 } from "react-icons/md";
import { GrDocumentTime } from "react-icons/gr";
import { RiFilePaperLine } from "react-icons/ri";
import CashflowOverview from "./CashflowOverview";

const ReportsSection = () => {
  const [selectedDate, setSelectedDate] = useState("Today");
  const data = [
    { visitors: 0, productViews: 0 },
    { visitors: 0, productViews: 0 },
    { visitors: 0, productViews: 0 },
    { visitors: 0, productViews: 0 },
  ];

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="p-3 w-full md:w-[90%] shadow-md">
      <div className="flex flex-wrap justify-between items-center pb-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold">Today’s Sales</h1>
        <select
          className="text-sm text-green-600 cursor-pointer bg-transparent focus:outline-none"
          value={selectedDate}
          onChange={handleDateChange}
        >
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="Last 7 Days">Last 7 Days</option>
          <option value="Last 30 Days">Last 30 Days</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        <div className="w-44 h-44 bg-[#bbcdcc] flex items-center justify-center rounded-xl">
          <div className="flex flex-col gap-y-2 text-center">
            <div className="w-10 h-10 bg-[#63C3BE] rounded-full flex items-center justify-center">
              <MdOutlineInsertChartOutlined className="text-white text-3xl" />
            </div>
            <h1 className="text-2xl font-semibold">$10K</h1>
            <p className="text-[#425166]">Total sales</p>
            <p className="text-sm text-[#4079ED]">8% from yesterday</p>
          </div>
        </div>
        <div className="w-44 h-44 bg-[#FFF4DE] flex items-center justify-center rounded-xl">
          <div className="flex flex-col gap-y-2 text-center">
            <div className="w-10 h-10 bg-[#63C3BE] rounded-full flex items-center justify-center">
              <RiFilePaperLine className="text-white text-3xl" />
            </div>
            <h1 className="text-2xl font-semibold">$10K</h1>
            <p className="text-[#425166]">Total sales</p>
            <p className="text-sm text-[#4079ED]">8% from yesterday</p>
          </div>
        </div>
        <div className="w-44 h-44 bg-[#DCFCE7] flex items-center justify-center rounded-xl">
          <div className="flex flex-col gap-y-2 text-center">
            <div className="w-10 h-10 bg-[#3CD856] rounded-full flex items-center justify-center">
              <IoPricetagOutline className="text-white text-3xl" />
            </div>
            <h1 className="text-2xl font-semibold">8</h1>
            <p className="text-[#425166]">Total sales</p>
            <p className="text-sm text-[#4079ED]">8% from yesterday</p>
          </div>
        </div>
        <div className="w-44 h-44 bg-[#F3E8FF] flex items-center justify-center rounded-xl">
          <div className="flex flex-col gap-y-2 text-center">
            <div className="w-10 h-10 bg-[#63C3BE] rounded-full flex items-center justify-center">
              <MdPersonAddAlt1 className="text-white text-3xl" />
            </div>
            <h1 className="text-2xl font-semibold">$10K</h1>
            <p className="text-[#425166]">Total sales</p>
            <p className="text-sm text-[#4079ED]">8% from yesterday</p>
          </div>
        </div>
        <div className="w-44 h-44 bg-[#CFCFF5] flex items-center justify-center rounded-xl">
          <div className="flex flex-col gap-y-2 text-center">
            <div className="w-10 h-10 bg-[#63C3BE] rounded-full flex items-center justify-center">
              <GrDocumentTime className="text-white text-2xl" />
            </div>
            <h1 className="text-2xl font-semibold">$10K</h1>
            <p className="text-[#425166]">Total sales</p>
            <p className="text-sm text-[#4079ED]">8% from yesterday</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md px-6 py-4 mt-6">
        <CashflowOverview />
      </div>
    </div>
  );
};

export default ReportsSection;
