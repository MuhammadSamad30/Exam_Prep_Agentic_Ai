"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, Clock, RotateCcw, Home, BarChart3 } from "lucide-react";
import Link from "next/link";

interface ResultPopupProps {
  score: number;
  total: number;
  onRestart: () => void;
  onClose: () => void;
  timeSpent?: string;
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
  
  // Determine performance level
  let performanceLevel = "";
  let performanceColor = "";
  
  if (percentage >= 90) {
    performanceLevel = "Excellent!";
    performanceColor = "from-emerald-500 to-teal-500";
  } else if (percentage >= 70) {
    performanceLevel = "Good Job!";
    performanceColor = "from-green-500 to-emerald-500";
  } else if (percentage >= 50) {
    performanceLevel = "Not Bad!";
    performanceColor = "from-amber-500 to-orange-500";
  } else {
    performanceLevel = "Needs Improvement";
    performanceColor = "from-rose-500 to-red-500";
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, type: "spring", damping: 15 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full overflow-hidden"
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${performanceColor} p-5 text-center`}>
          <h2 className="text-2xl font-bold text-white">{performanceLevel}</h2>
          <p className="text-white/90 mt-1">Quiz Completed</p>
        </div>
        
        {/* Score Circle */}
        <div className="flex justify-center -mt-12 relative z-10">
          <div className="relative">
            <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#374151"
                strokeWidth="3"
              />
              <motion.path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={percentage >= 50 ? "#10B981" : "#EF4444"}
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ strokeDasharray: "100, 100" }}
                animate={{ strokeDasharray: `${percentage}, 100` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-white">{percentage}%</span>
              <span className="text-xs text-gray-300">{score}/{total}</span>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="px-6 pb-6 mt-4">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-700/30 rounded-xl p-4 text-center border border-gray-600">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Correct</p>
              <p className="text-xl font-bold text-green-400">{score}</p>
            </div>
            <div className="bg-gray-700/30 rounded-xl p-4 text-center border border-gray-600">
              <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Incorrect</p>
              <p className="text-xl font-bold text-red-400">{wrong}</p>
            </div>
          </div>
          
          {/* Time Spent */}
          {timeSpent && (
            <div className="flex items-center justify-center bg-gray-700/30 rounded-xl p-3 mb-6 border border-gray-600">
              <Clock className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-300">Time Spent:</span>
              <span className="ml-2 font-semibold text-blue-300">{timeSpent}</span>
            </div>
          )}
          
          {/* Performance Message */}
          <div className="bg-gray-700/30 rounded-xl p-4 mb-6 border border-gray-600">
            <h3 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" /> Performance Summary
            </h3>
            <p className="text-xs text-gray-400">
              {percentage >= 90 
                ? "Outstanding performance! You've mastered this material."
                : percentage >= 70
                ? "Solid understanding of the material with room for refinement."
                : percentage >= 50
                ? "You're on the right track but need more practice."
                : "Review the material and try again to improve your score."
              }
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onRestart}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Retry
            </button>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium transition-colors text-center"
            >
              <Home className="w-5 h-5" />
              Home
            </Link>
          </div>
          
          {/* Review Button */}
          <button
            onClick={onClose}
            className="w-full mt-3 px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
          >
            Review Answers
          </button>
        </div>
      </motion.div>
    </div>
  );
}