import React from "react";
import Link from 'next/link'
function ForgotPassword() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 text-black">
      <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
        <h1 className="text-2xl font-semibold mb-2">
          Forgot Password?
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Enter your email address
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter email address"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <Link href="/resetpassword">
            <button
              type="submit"
              className="mt-5 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold"
            >
              Continue
            </button>
          </Link>

        </form>

        <p className="text-sm text-gray-400 mt-4">
          <Link href="/login" className="text-blue-400 underline">
            Go Back to Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;