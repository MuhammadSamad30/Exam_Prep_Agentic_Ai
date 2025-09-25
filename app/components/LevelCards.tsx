import Link from "next/link";
import React from "react";

const LevelCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto p-4 justify-center items-center min-h-[calc(100vh-2rem) mt-4">
      <Link href="/FirstLevel" className="w-full md:w-1/3 group">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl shadow-lg hover:shadow-purple-500/20 border border-gray-700 relative overflow-hidden min-h-[250px]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-2xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
              Level 1
            </h2>
            <p className="text-gray-300 text-lg mb-6 font-light leading-relaxed">
              Perfect starting point for beginners
            </p>

            <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto border border-gray-700">
              <span className="text-2xl text-white font-bold">01</span>
            </div>
          </div>

          <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/30 rounded-2xl transition-all duration-300"></div>
        </div>
      </Link>

      <Link href="/SecondLevel" className="w-full md:w-1/3 group">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl p-8 flex flex-col items-center transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl shadow-lg hover:shadow-emerald-500/20 border border-gray-700 relative overflow-hidden min-h-[250px]">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 rounded-2xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
              Level 2
            </h2>
            <p className="text-gray-300 text-lg mb-6 font-light leading-relaxed">
              Intermediate challenges to boost your skills
            </p>

            <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto border border-gray-700">
              <span className="text-2xl text-white font-bold">02</span>
            </div>
          </div>

          <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/30 rounded-2xl transition-all duration-300"></div>
        </div>
      </Link>
    </div>
  );
};

export default LevelCards;
