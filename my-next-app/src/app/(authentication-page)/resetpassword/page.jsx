import React from "react";


function ResetPassword() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 text-black">
      <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
        <h1 className="text-2xl font-semibold mb-2">
          New Password
        </h1>
        <p className="text-gray-500 text-sm mb-6 ">
          Please create a new password that <br/>
          you don't use on any other site.
        </p>

        <form className="space-y-4">
          <input
            type="password"
            placeholder="Create new password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold"
          >
            Change
          </button>
        </form>

      </div>
    </div>
  );
}

export default ResetPassword;