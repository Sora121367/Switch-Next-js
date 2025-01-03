"use client";
import ShowData from "@/components/Admin/ShowData";
import Image from "next/image";
import Charts from "@/components/Admin/Charts";
import { useState } from "react";

export default function DashBoardAdmin() {
  // State to track time range for both the cards (ShowData) and the charts
  const [timeRangeCard, setTimeRangeCard] = useState("months");
  const [timeRangeChart, setTimeRangeChart] = useState("months"); // State for chart time range

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex gap-1 p-3">
        <Image src="./Home.svg" alt="" width={27} height={27} />
        <h1 className="font-bold text-xl">Home</h1>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold p-4 text-xl">
          Profile information & Dashboard
        </h1>
        {/* Dropdown for time range card */}
        <select
          className="border rounded p-2 text-green-800 bg-gray-100"
          value={timeRangeCard}
          onChange={(e) => setTimeRangeCard(e.target.value)}
        >
          <option value="months">Months</option>
          <option value="weeks">Weeks</option>
        </select>
      </div>
      
      {/* ShowData card with dynamic time range */}
        <ShowData  timeRange={timeRangeCard} /> {/* Pass timeRangeCard here */}

      {/* Chart overview with dynamic time range */}
      <div className="bg-white rounded-lg mt-4 p-2">
        <div className="flex justify-between items-center p-2 mb-4">
          <h1 className="font-bold text-xl my-4">Product Overview</h1>
          {/* Dropdown for time range chart */}
          <select
            className="border rounded p-2 text-green-800 bg-gray-100"
            value={timeRangeChart}
            onChange={(e) => setTimeRangeChart(e.target.value)}
          >
            <option value="months">Months</option>
            <option value="weeks">Weeks</option>
          </select>
        </div>
        <Charts timeRange={timeRangeChart} /> {/* Pass timeRangeChart here */}
      </div>
    </div>
  );
}
