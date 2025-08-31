"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicById } from "../../../data";
import ResultPopup from "@/app/components/ResultPopup";

interface TopicPageProps {
  params: {
    topicId: string;
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const topicId = parseInt(params.topicId);
  const topic = getTopicById(topicId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!topic) {
    notFound();
  }

  const question = topic.mcqs[currentQuestion];
  const isLastQuestion = currentQuestion === topic.mcqs.length - 1;

  const handleOptionSelect = (option: string) => {
    if (showExplanation) return;
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    if (selectedOption === question.answer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < topic.mcqs.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-gray-100 py-10 px-4">
      {/* Header */}
      <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 drop-shadow-lg">
            {topic.name}
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            {topic.description}
          </p>
        </div>
        <div className="bg-gray-900/60 px-4 py-2 rounded-xl shadow-md border border-purple-800/40 text-sm text-right">
          <p className="text-gray-400">
            Question{" "}
            <span className="font-semibold text-purple-300">
              {currentQuestion + 1}
            </span>{" "}
            of {topic.mcqs.length}
          </p>
          <p className="font-semibold text-blue-300">
            Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
          </p>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-2xl shadow-[0_8px_30px_rgba(139,92,246,0.25)] p-6 sm:p-8 mb-10 border border-purple-700/40 backdrop-blur-md transition hover:shadow-[0_8px_40px_rgba(139,92,246,0.4)]">
        <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-6">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === question.answer;
            const isWrong = isSelected && showExplanation && !isCorrect;

            return (
              <div
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`p-4 rounded-xl cursor-pointer border-2 transition-all duration-300 transform hover:scale-[1.02]
                  ${
                    isSelected && !showExplanation
                      ? "bg-indigo-900 border-indigo-500 shadow-lg"
                      : isSelected && showExplanation && isCorrect
                      ? "bg-green-900 border-green-500 shadow-lg"
                      : isWrong
                      ? "bg-red-900 border-red-500 shadow-lg"
                      : showExplanation && isCorrect
                      ? "bg-green-900 border-green-500 shadow-lg"
                      : "bg-gray-900 border-gray-700 hover:bg-gray-800"
                  }`}
              >
                <span className="text-base sm:text-lg">{option}</span>
              </div>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && question.explanation && (
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-l-4 border-indigo-500 p-5 mb-6 rounded-xl shadow-md">
            <p className="text-indigo-300 text-sm sm:text-base">
              {question.explanation}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end">
          {!showExplanation ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className={`px-6 py-3 rounded-xl font-semibold transition transform hover:scale-105
                ${
                  selectedOption
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
            >
              {isLastQuestion ? "Finish Quiz" : "Next Question"}
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8 gap-4">
        <Link
          href={`/category/${
        topic.name.toLowerCase().includes("basic")
          ? "basic"
          : topic.name.toLowerCase().includes("medium")
          ? "medium"
          : "advanced"
          }`}
          className="inline-flex items-center px-5 py-2 rounded-xl bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700 text-purple-200 hover:text-white font-semibold shadow-md transition-all duration-200"
        >
          <span className="mr-2">←</span> Back to Topics
        </Link>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-800 to-purple-800 hover:from-indigo-700 hover:to-purple-700 text-purple-200 hover:text-white font-semibold shadow-md transition-all duration-200"
        >
          <span className="mr-2">←</span> Back to Categories
        </Link>
      </div>
        {showResult && (
          <ResultPopup
            score={score}
            total={topic.mcqs.length}
            onRestart={handleRestart}
            onClose={() => setShowResult(false)}
          />
        )}
    </div>
  );
}
