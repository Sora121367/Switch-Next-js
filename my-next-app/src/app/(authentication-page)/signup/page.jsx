import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Link from 'next/link'
function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 text-black">
      <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
        <h1 className="text-2xl font-semibold mb-2">
          Create with Switch Account
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          if you already have a Switch account go {" "}
          <Link href="/login" className="text-blue-400 underline">
            Sign in
          </Link>{" "}
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <button className="text-gray-400 hover:text-gray-600 transition">
            Log in
          </button>
          <button className="text-blue-500 font-semibold border-b-2 border-blue-400">
            Sign up
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <button
            className="flex items-center justify-center w-full py-2 rounded-md border border-gray-300 hover:bg-blue-100 transition"
            aria-label="Continue with Facebook"
          >
            <FaFacebook className=" mr-2" />
            Continue with Facebook
          </button>
          <button
            className="flex items-center justify-center w-full py-2 rounded-md border border-gray-300 hover:bg-red-100 transition"
            aria-label="Continue with Google"
          >
            <FaGoogle className=" mr-2" />
            Continue with Google
          </button>
        </div>

        <p className="text-gray-400 mb-4">OR</p>

        <form className="space-y-4">
          <h2 className="text-xl font-medium">Start with Switch Account</h2>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <Link  href="/verification">
            <button
              type="submit"
              className="mt-5 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold"
            >
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;