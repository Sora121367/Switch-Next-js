'use client';

import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";

const ChannelSection = () => {
  const channelURL = "https://www.switch.com/@Shoes-store";
  const [copied, setCopied] = useState(false);

  const handleCopyURL = () => {
    navigator.clipboard.writeText(channelURL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
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
  );
};

export default ChannelSection;
