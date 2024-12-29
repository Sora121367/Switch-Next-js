import React from "react";
import Link from 'next/link'
function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 text-black">
      <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
        <h1 className="text-2xl font-semibold mb-2">
          Check Your email
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          We sent a reset link to contact@gmail.com<br/>
          enter 6 digit code that mentioned in the email.
        </p>

        <form className="space-y-4">
          <div className="flex justify-between">
            <input
            type="text"
            maxLength={1}
            className="text-center w-14 h-14 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 valid:outline-blue-400"
            required
            />
            <input
            type="text"
            maxLength={1}
            className="text-center w-14 h-14 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 valid:outline-blue-400"
            required
            />
            <input
            type="text"
            maxLength={1}
            className="text-center w-14 h-14 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 valid:outline-blue-400"
            required
            />
            <input
            type="text"
            maxLength={1}
            className="text-center w-14 h-14 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 valid:outline-blue-400"
            required
            />
            <input
            type="text"
            maxLength={1}
            className="text-center w-14 h-14 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 valid:outline-blue-400"
            required
            />
            <input
            type="text"
            maxLength={1}
            className="text-center w-14 h-14 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 valid:outline-blue-400"
            required
            />
          </div>

          <Link href="/role">
            <button
              type="submit"
              className="mt-5 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold"
            >
              Verify Code
            </button>
          </Link>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          Haven't got the email yet?
          <a href="#" className="text-blue-400 underline">
            Resend email
          </a>
        </p>

      </div>
    </div>
  );
}

export default Login;