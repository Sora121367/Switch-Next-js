import React from "react";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { messages } from "./constants";
import Link  from "next/link";

import { IoIosInformationCircle } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { GrEmoji } from "react-icons/gr";

const Messages = () => {
  // State for input field
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          sender: "You",
          content: inputMessage,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          side: "right",
        },
      ]);
      setInputMessage(""); // Clear the input field after sending
    }
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between text-lg lg:text-xl">
        {/* <div className="flex items-center gap-3">
          <AiOutlineMessage
            className="text-blue-500"
            aria-label="Messages Icon"
          />
          <h1 className="font-semibold">Messages</h1>
        </div> */}
        
      </div>

      {/* -----------------End of content------------------- */}

      <div className="w-full h-screen flex flex-col md:flex-row p-8">
        {/* Chat Profile Section */}
        <div className="w-full md:w-1/3 h-[85vh] p-5 shadow-md rounded-tl-[2rem] rounded-bl-[2rem] scroll-smooth overflow-y-scroll overflow-x-hidden">
          <h1 className="text-[1.9rem] mb-4">Chats</h1>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search messenger"
            className="w-full h-[2.3rem] rounded-full p-4 outline-none mb-4 border border-black"
          />

          {/* Messages List */}
          <div className="w-full p-1 space-y-1 cursor-pointer">
            {messages.map((message) => {
              let truncatedMsg;

              if (message.msg.length > 30) {
                truncatedMsg = message.msg.slice(0, 25) + "...";
              } else {
                truncatedMsg = message.msg;
              }

              return (
                <Link
                  key={message.id}
                  to={`/messages/${message.id}`}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition"
                >
                  {/* Profile Image */}
                  <img
                    src={message.img}
                    alt={`${message.name}'s profile`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {/* Message Info */}
                  <div className="flex flex-col w-full">
                    <h3 className="-mt-4 font-semibold text-gray-800">
                      {message.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        <span className="mr-1">you:</span>
                        {truncatedMsg}
                      </p>
                      <p className="text-sm text-gray-500">{message.date}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Chat Message Section */}
        <div className="w-full md:w-2/3 h-[85vh]  bg-gray-50 shadow-md rounded-tr-[2rem] rounded-br-[2rem] flex flex-col">
          <div className="h-[3.5rem] px-8 flex items-center justify-between bg-slate-300/25 gap-3">
            <div className="flex gap-2">
              <img
                src="src/assets/image10.png"
                alt="profile"
                className="w-[2.8rem]  rounded-full z-10 cursor-pointer"
              />
              <div className=" -space-y-1">
                <p className="text-lg">Saitama</p>
                <p className="text-sm">Active now</p>
              </div>
            </div>

            <div className="text-lg lg:text-2xl text-[#0B5754] cursor-pointer">
              <IoIosInformationCircle />
            </div>
          </div>

          {/* Message Display Area */}
          <div className="flex-1 overflow-x-hidden overflow-y-auto mb-4">
            <div className="flex  items-center justify-center flex-col py-10">
              <img
                src="src/assets/image10.png"
                alt="profile"
                className="w-[3.8rem]  rounded-full z-10 cursor-pointer"
              />
              <div className="flex items-center flex-col space-y-2">
                <h3 className="text-xl py-2 ">Siatama</h3>
                <p className="text-sm">Nov 19 , 2024, 4:42 PM</p>
              </div>
            </div>
            {/* conversation */}

            <div className="space-y-4">
              {/* Left Message */}
              <div className="relative left-2 flex items-center gap-3">
                <img
                  src="src/assets/image10.png"
                  alt="profile"
                  className="w-[1.7rem] rounded-full z-10 cursor-pointer"
                />
                <div className="flex flex-col ">
                  <div className="flex max-w-[26rem] w-auto h-auto py-1 px-2 rounded-full bg-[#D9D9D9] flex-col space-y-4 break-all">
                    <p className="text-sm p-2 flex-col">How much bro</p>
                  </div>
                  <p className="text-xs mt-1 flex justify-start">12:45</p>
                </div>
              </div>

              {/* Right Message */}
              <div className="relative right-2 flex items-center gap-3 justify-end">
                <div className="flex flex-col items-end">
                  <div className="flex max-w-[26rem] w-auto h-auto py-1 px-2 rounded-full bg-[#D9D9D9] flex-col space-y-4 break-all">
                    <p className="text-sm p-2 flex-col">
                      1 million dollars bro
                    </p>
                  </div>
                  <p className="text-xs mt-1 flex justify-end">12:45</p>
                </div>

                <img
                  src="src/assets/image10.png"
                  alt="profile"
                  className="w-[1.7rem] rounded-full z-10 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="flex items-center gap-3 px-4 py-5 border-t border-gray-200">
            {/* Attachment Button */}
            <button
              aria-label="Attach file"
              className="bg-slate-300/25 p-3 rounded-full hover:bg-slate-300 transition"
            >
              <GrAttachment className="text-xl" />
            </button>

            {/* Input Field with Emoji */}
            <div className="relative flex-1">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full h-[3rem] pl-4 pr-10 rounded-full outline-none border border-gray-300"
              />
              <GrEmoji className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 cursor-pointer hover:text-gray-700" />
            </div>

            {/* Conditional Buttons */}
            {inputMessage.trim() === "" ? (
              // Voice Input Button (shown when no text is entered)
              <button
                aria-label="Record voice"
                className="bg-slate-300/25 p-3 rounded-full hover:bg-slate-300 transition"
              >
                <MdKeyboardVoice className="text-xl" />
              </button>
            ) : (
              
              <button
                onClick={handleSendMessage}
                aria-label="Send message"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              >
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
