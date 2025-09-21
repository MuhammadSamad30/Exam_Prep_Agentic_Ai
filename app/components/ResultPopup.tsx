"use client";

import { motion } from "framer-motion";

interface ResultPopupProps {
  score: number;
  total: number;
  onRestart: () => void;
  onClose: () => void;
  timeSpent?: any;
}

export default function ResultPopup({
  score,
  total,
  onRestart,
  onClose,
  timeSpent,
}: ResultPopupProps) {
  const wrong = total - score;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-[0_8px_30px_rgba(139,92,246,0.4)] border border-purple-700/40 max-w-md w-full p-6 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 drop-shadow mb-4">
          🎉 Quiz Completed!
        </h2>

        <p className="text-gray-300 text-lg mb-2">
          Correct: <span className="text-green-400 font-semibold">{score}</span>
        </p>
        <p className="text-gray-300 text-lg mb-2">
          Wrong: <span className="text-red-400 font-semibold">{wrong}</span>
        </p>
        <p className="text-indigo-300 text-lg mb-6">
          Score Percentage: <span className="font-semibold">{percentage}%</span>
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onRestart}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow transition transform hover:scale-105"
          >
            🔄 Restart
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold shadow transition transform hover:scale-105"
          >
            ✖ Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
