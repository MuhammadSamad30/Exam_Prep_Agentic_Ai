import Link from "next/link";
import React from "react";

const SecondCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full transform rotate-45 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-900/10 rounded-full transform -rotate-12 animate-pulse-medium"></div>
      </div>

      <div className="text-center mb-12">
        <Link
          href="/"
          className="absolute left-4 top-4 flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-lg bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Level 2 Topics
        </h3>
        <p className="text-1xl sm:text-2xl font-bold text-white mb-4 drop-shadow-lg bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Exam will come here in working days
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Your cards/content will go here */}
      </div>
    </div>
  );
};

export default SecondCard;
