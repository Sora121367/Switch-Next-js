"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useRouter } from "next/navigation";
import useAuth from "@/useAuth";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [profileImage, setProfileImage] = useState("/image10.png"); // Default image
  const [notifications, setNotifications] = useState([]);
  const [imageFile, setImageFile] = useState(null); // For upload
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      setProfileImage(user.profile_picture || "/image10.png"); // Use profilePicture from user data
    }
  }, [user, loading]);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem("token"); // Clear token
    window.location.reload();
    router.push("/");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setImageFile(file);
    }
  };

  const handleProfileUpload = async () => {
    if (!imageFile) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("profile_picture", imageFile);

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setProfileImage(data.profile_picture); // Update image on success
        alert("Profile picture uploaded successfully!");
      } else {
        console.error(data.message || "Error uploading profile picture");
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
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
            <span className="absolute -top-3 -right-3 bg-blue-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              9+
            </span>
          </button>

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
                  <li className="text-gray-500 text-sm">
                    No new notifications
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* User Profile */}
          <img
            src={profileImage}
            alt="User Profile"
            className="h-8 w-8 rounded-full object-cover cursor-pointer"
            onClick={toggleProfileOptions}
          />
        </div>
      </nav>

      {showProfileOptions && (
        <div className="absolute w-[24rem] h-[50vh] top-14 right-0 bg-white shadow-lg rounded-md  z-10 flex flex-col justify-between">
          <div className="p-4">
            <div className="p-4 flex items-center gap-3">
              {/* User Profile */}
              <img
                src={profileImage}
                alt="User Profile"
                className="h-12 rounded-full object-cover cursor-pointer"
                onClick={toggleProfileOptions}
              />

              <div className="flex flex-col text-[#0B5754]">
                <p className="text-md font-semibold">{user?.username}</p>
                <p className="text-sm">{user?.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="file"
                accept="image/*"
                className="border border-gray-300 p-2 w-full mb-4"
                onChange={handleImageChange}
              />
              <button
                onClick={handleProfileUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
              >
                Upload Profile Picture
              </button>
            </div>
          </div>
          
          {/* Logout Button */}
          <div className="w-full  border-2 ">
            <button
              onClick={handleLogout}
              className=" w-full text-start text-black px-4 py-3 rounded-md hover:shadow-lg "
            >
              Logout
            </button>
          </div>
          
        </div>
        
      )}
    </header>
  );
};

export default Header;
