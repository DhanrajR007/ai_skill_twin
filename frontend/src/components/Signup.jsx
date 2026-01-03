import React from "react";

const Signup = ({ onToggle }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Create Account
        </h1>
        <p className="text-zinc-400 text-sm">
          Join us and start building today
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-zinc-300 ml-1">
            Full Name
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-zinc-500 group-focus-within:text-blue-400 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600 rounded-xl px-4 py-3 pl-10 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-200"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-zinc-300 ml-1">
            Email Address
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-zinc-500 group-focus-within:text-blue-400 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600 rounded-xl px-4 py-3 pl-10 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-200"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-zinc-300 ml-1">
            Password
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-zinc-500 group-focus-within:text-purple-400 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600 rounded-xl px-4 py-3 pl-10 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all duration-200"
            />
          </div>
        </div>

        <button
          type="button"
          className="mt-2 w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/25 active:scale-[0.98] cursor-pointer"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <button
          onClick={onToggle}
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
        >
          Sign in
        </button>
      </p>
    </div>
  );
};

export default Signup;
