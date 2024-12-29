'use client';

import React, { useState } from "react";

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
    <div className="p-3 w-1/2 shadow-md">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold">Reports</h1>
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
      <div className="mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 border-b last:border-none border-gray-200"
          >
            <div>
              <p className="text-sm text-gray-500">Visitors</p>
              <h2 className="text-lg font-semibold">{item.visitors}</h2>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Product views</p>
              <h2 className="text-lg font-semibold">{item.productViews}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsSection;
