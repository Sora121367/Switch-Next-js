// SignUp.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Link from "next/link";

function SignUp() {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
  
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
  
    if (!password || password.length < 5) {
      setError("Password must be at least 5 characters long.");
      return;
    }
  
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await res.json();
  
      if (res.status === 204) {
        console.log("No content returned from server.");
        return;
      }
  
      if (res.status === 400) {
        setError(data.message || "This email is already registered");
      }
  
      if (res.status === 201) {
        // Assuming the token is returned in the response data
        const { token } = data;
  
        // Store the token in localStorage
        localStorage.setItem("token", token);
  
        setFormData({ username: "", email: "", password: "" });
        setError(""); // Clear error on successful signup
        router.push("/verification"); // Redirect to verification page
      }
    } catch (error) {
      setError("Error, please try again.");
      console.log(error);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 text-black">
      <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
        <h1 className="text-2xl font-semibold mb-2">Create with Switch Account</h1>
        <p className="text-gray-500 text-sm mb-6">
          If you already have a Switch account go{" "}
          <Link href="/login" className="text-blue-400 underline">
            Sign in
          </Link>
        </p>

        <div className="space-y-4 mb-6">
          <button className="flex items-center justify-center w-full py-2 rounded-md border border-gray-300 hover:bg-blue-100 transition" aria-label="Continue with Facebook">
            <FaFacebook className="mr-2" />
            Continue with Facebook
          </button>
          <button className="flex items-center justify-center w-full py-2 rounded-md border border-gray-300 hover:bg-red-100 transition" aria-label="Continue with Google">
            <FaGoogle className="mr-2" />
            Continue with Google
          </button>
        </div>

        <p className="text-gray-400 mb-4">OR</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-medium">Start with Switch Account</h2>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button type="submit" className="mt-5 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
