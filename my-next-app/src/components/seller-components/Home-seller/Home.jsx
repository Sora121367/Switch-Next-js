import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [copied, setCopied] = useState(false);

  const data = [
    { visitors: 0, productViews: 0 },
    { visitors: 0, productViews: 0 },
    { visitors: 0, productViews: 0 },
    { visitors: 0, productViews: 0 },
  ];

  const channelURL = "https://www.switch.com/@Shoes-store";

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCopyURL = () => {
    navigator.clipboard.writeText(channelURL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" state after 2 seconds
    });
  };

  return (
    <div className="w-full h-full p-4 bg-[#FAFAFB]">
      <h1 className="text-xl font-semibold">Profile information & Report</h1>
      <div className="flex justify-between p-5">
        {/* Channel URL Section */}
        <div className="relative w-1/2 h-20 flex-col p-2 py-4 shadow-md rounded-lg cursor-pointer">
          <h1 className="font-semibold">Channel URL</h1>
          <a
            href={channelURL}
            className="text-sm hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {channelURL}
          </a>
          <div
            className="absolute right-2 top-8 mr-2 text-xl cursor-pointer"
            onClick={handleCopyURL}
            title="Copy URL"
          >
            <MdContentCopy />
          </div>
          {copied && (
            <span className="absolute top-2 right-2  text-green-600 text-sm">
              URL Copied!
            </span>
          )}
        </div>

        {/* Logo, Store Name, and Followers Section */}
        <div className="w-[500px] h-[9.5rem] flex items-center p-5 rounded-lg cursor-pointer shadow-md">
          {/* Logo */}
          <img
            src="src/assets/image11.png"
            alt="logo"
            className="w-[4.5rem] mr-4"
          />
          {/* Store Name and Followers */}
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg">Shoes Store</h1>
            <p className="text-sm">
              0 <span className="text-gray-500">Follower</span>
            </p>
          </div>
          {/* Edit Icon */}
          <div className="ml-auto text-xl">
            <FiEdit />
          </div>
        </div>
      </div>

      {/* Reports Section */}
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

        {/* Report Rows */}
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
    </div>
  );
};

export default Home;
