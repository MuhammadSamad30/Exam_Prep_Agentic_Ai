// /app/exam-topics/page.tsx
import React from "react";
import ExamTopicsCard from "../components/ExamTopicsCard";
import Link from "next/link";

const ExamTopicsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link href={"/"}>
          <button className="mb-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition">
            ← Back to Home
          </button>
        </Link>

        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Important Topics
          </h1>
        </header>

        <ExamTopicsCard />

        <footer className="mt-12 text-center text-sm text-gray-400">
          Note: This Topics is very Important for Exam Preparation.
        </footer>
      </div>
    </main>
  );
};

export default ExamTopicsPage;
