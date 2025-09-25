"use client";
import LevelCards from "./components/LevelCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-6 px-4 sm:px-6 lg:px-8">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full transform rotate-45 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-900/10 rounded-full transform -rotate-12 animate-pulse-medium"></div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-lg bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Welcome to Exam Preparation
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          Select a category below to start practicing MCQs for your exam
          preparation. We have categorized topics based on difficulty levels to
          help you study efficiently.
        </p>
      </div>
      <LevelCards />
    </div>
  );
}
