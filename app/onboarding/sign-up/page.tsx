import React from "react";

export default function SignUp() {
  return (
    <div className="bg-white p-8 rounded-lg max-w-lg w-full mx-auto mt-10 font-AtkinsonHyperlegible">
      <h2 className="text-4xl font-bold mb-6 text-gray-700">Create Account</h2>
      <form>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-bold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-2 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
            placeholder="abc@gmail.com"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-lg font-bold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-2 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between mb-8">
          <div className="pl-2 w-1/2">
            <p className="text-sm text-gray-600 mb-1 w-full">
              ✔ One lowercase character
            </p>
            <p className="text-sm text-gray-600 w-full">
              ✔ One special character
            </p>
          </div>
          <div className="pr-2 w-1/2">
            <p className="text-sm text-gray-600 mb-1 w-full">
              ✔ One uppercase character
            </p>
            <p className="text-sm text-gray-600 w-full">
              ✔ 8 characters minimum
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="max-w-xs flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-bold text-gray-800 bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
        >
          Continue
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <p className="mt-8 text-sm text-gray-600 whitespace-nowrap tracking-tight">
          Note: You can always go into <strong>Settings</strong> if you want to
          change your password.
        </p>
      </form>
    </div>
  );
}
