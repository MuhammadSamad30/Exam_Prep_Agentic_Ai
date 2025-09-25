import React from "react";
import { categories } from "../../level-1/data";
import Link from "next/link";
import ImpExamCard from "./ImpExamCard";

const FirstCard = () => {
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
          Level 1 Topics
        </h3>
      </div>
      <ImpExamCard />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="group perspective-1000"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Link href={`/category/${category.name.toLowerCase()}`}>
              <div className="relative h-full transform-style-preserve-3d transition-all duration-500 group-hover:rotate-y-10 group-hover:translate-z-10">
                <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 p-6 transform-style-preserve-3d transition-all duration-500 group-hover:shadow-purple-500/20 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 px-4 py-3 rounded-t-xl -mx-6 -mt-6 mb-4 border-b border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white tracking-wide transform-style-preserve-3d">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex-grow">
                    <p className="text-gray-300 mb-4 text-sm md:text-base transform-style-preserve-3d">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-700/30 mt-auto">
                    <span className="text-sm text-gray-400 transform-style-preserve-3d">
                      {category.topics.length} topic
                      {category.topics.length !== 1 ? "s" : ""}
                    </span>
                    <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-purple-700/10 rounded-2xl transform rotate-y-90 translate-z-2 transition-all duration-500 group-hover:opacity-80 -z-10"></div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstCard;
