"use client";
import React, { useState } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    "New comment on your post",
    "Update available for your profile",
    "Your order has been shipped",
  ];

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  return (
    <header className="w-full bg-[#0B5754] h-14 p-3 px-10">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="Home">
          <img src="/logo.png" alt="Site Logo" className="h-4" />
        </a>

        {/* Notifications and Profile */}
        <div className="relative flex items-center gap-6">
          {/* Notifications */}
          <button
            aria-label="Notifications"
            className="relative text-white text-xl focus:outline-none"
            onClick={toggleNotifications}
          >
            <MdOutlineNotificationsActive className="text-2xl" />
            {/* Notification Badge */}
            <span className="absolute -top-3 -right-3 bg-blue-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              9+
            </span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-64 p-4 z-10">
              <h3 className="text-sm font-semibold mb-2">Notifications</h3>
              <ul>
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <li
                      key={index}
                      className="text-gray-700 text-sm border-b py-2 last:border-none"
                    >
                      {notification}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 text-sm">No new notifications</li>
                )}
              </ul>
            </div>
          )}

          {/* User Profile */}
          <img
            src="/image10.png"
            alt="User Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
