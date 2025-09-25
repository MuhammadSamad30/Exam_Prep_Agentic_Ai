"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { getTopicById } from "../../../level-1/data";
import ResultPopup from "@/app/components/ResultPopup";
import { ArrowLeft, Clock, HelpCircle } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

export default function TopicPage() {
  const params = useParams();
  const topicId = parseInt(params.topicId as string);
  const topic = getTopicById(topicId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    if (!topic) {
      notFound();
    }
  }, [topic]);

  // Timer effect
  useEffect(() => {
    if (timeRemaining <= 0 || showResult) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, showResult]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && showExplanation) {
        handleNextQuestion();
      } else if (e.key >= "1" && e.key <= "4" && !showExplanation) {
        const optionIndex = parseInt(e.key) - 1;
        if (topic && optionIndex < topic.mcqs[currentQuestion].options.length) {
          handleOptionSelect(topic.mcqs[currentQuestion].options[optionIndex]);
        }
      } else if (e.key === "Escape" && showExplanation) {
        setShowExplanation(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showExplanation, currentQuestion, topic]);

  if (!topic) return null;

  const question = topic.mcqs[currentQuestion];
  const isLastQuestion = currentQuestion === topic.mcqs.length - 1;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOptionSelect = (option: string) => {
    if (showExplanation) return;

    setSelectedOption(option);
    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestion));

    if (option === question.answer) {
      setScore(score + 1);
      toast.success("Correct answer!", {
        position: "top-center",
        duration: 2000,
        style: {
          background: "#10B981",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    } else {
      toast.error("Incorrect answer!", {
        position: "top-center",
        duration: 2000,
        style: {
          background: "#EF4444",
          color: "#fff",
          fontWeight: "bold",
        },
      });
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

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const handleQuestionNavigation = (index: number) => {
    setCurrentQuestion(index);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setShowResult(false);
    setTimeRemaining(30 * 60);
    setAnsweredQuestions(new Set());
  };

  const progress = ((currentQuestion + 1) / topic.mcqs.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 py-4 px-4 md:py-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                {topic.name}
              </h2>
              <p className="text-gray-400 text-xs md:text-sm">
                {topic.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <div className="bg-gray-800/80 px-4 py-2 rounded-lg border border-purple-800/40 flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-300" />
              <span className="text-sm font-medium text-purple-300">
                {formatTime(timeRemaining)}
              </span>
            </div>
            <div className="bg-gray-800/80 px-4 py-2 rounded-lg border border-blue-800/40 text-sm">
              <p className="text-gray-400">
                Question{" "}
                <span className="font-semibold text-blue-300">
                  {currentQuestion + 1}
                </span>{" "}
                of {topic.mcqs.length}
              </p>
              <p className="font-semibold text-blue-300">
                Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
              </p>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Question navigation sidebar */}
          <div className="w-full lg:w-1/4 bg-gray-800/50 rounded-xl p-4 border border-gray-700 order-2 lg:order-1">
            <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-1">
              <HelpCircle className="w-4 h-4" /> Questions
            </h3>
            <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-4 gap-2">
              {topic.mcqs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionNavigation(index)}
                  className={`w-8 h-8 rounded-lg text-xs font-medium flex items-center justify-center transition-all
                    ${
                      currentQuestion === index
                        ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                        : answeredQuestions.has(index)
                        ? "bg-green-800/50 text-green-300"
                        : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="w-full lg:w-3/4 order-1 lg:order-2">
            <div className="bg-gray-800/40 rounded-2xl shadow-lg p-4 md:p-6 mb-6 border border-gray-700 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full">
                  Question {currentQuestion + 1}
                </span>
                <span className="text-xs text-gray-400">
                  {Math.round(
                    ((currentQuestion + 1) / topic.mcqs.length) * 100
                  )}
                  % Complete
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-medium text-gray-100 mb-6 leading-relaxed">
                {question.question}
              </h3>

              <div className="space-y-3 mb-6">
                {question.options.map((option, index) => {
                  const isSelected = selectedOption === option;
                  const isCorrect = option === question.answer;
                  const isWrong = isSelected && showExplanation && !isCorrect;
                  const optionLetter = String.fromCharCode(65 + index); // A, B, C, D

                  return (
                    <div
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      className={`p-3 rounded-xl cursor-pointer border transition-all duration-300
                        ${
                          isSelected && !showExplanation
                            ? "bg-blue-900/30 border-blue-500 shadow-md"
                            : isSelected && showExplanation && isCorrect
                            ? "bg-green-900/30 border-green-500 shadow-md"
                            : isWrong
                            ? "bg-red-900/30 border-red-500 shadow-md"
                            : showExplanation && isCorrect
                            ? "bg-green-900/30 border-green-500 shadow-md"
                            : "bg-gray-700/30 border-gray-600 hover:bg-gray-700/50"
                        }`}
                    >
                      <div className="flex items-center">
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-semibold
                          ${
                            isSelected && !showExplanation
                              ? "bg-blue-500 text-white"
                              : isSelected && showExplanation && isCorrect
                              ? "bg-green-500 text-white"
                              : isWrong
                              ? "bg-red-500 text-white"
                              : showExplanation && isCorrect
                              ? "bg-green-500 text-white"
                              : "bg-gray-600 text-gray-200"
                          }`}
                        >
                          {optionLetter}
                        </span>
                        <span className="text-sm md:text-base">{option}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {showExplanation && question.explanation && (
                <div className="bg-gray-700/40 border-l-4 border-blue-500 p-4 mb-6 rounded-xl">
                  <p className="text-blue-200 text-sm md:text-base">
                    <span className="font-semibold">Explanation:</span>{" "}
                    {question.explanation}
                  </p>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="px-4 py-2 bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-gray-200 rounded-lg font-medium text-sm transition hover:bg-gray-600"
                >
                  Previous
                </button>

                {showExplanation && (
                  <button
                    onClick={handleNextQuestion}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium text-sm transition transform hover:scale-105 shadow-md"
                  >
                    {isLastQuestion ? "Finish Exam" : "Next Question"}
                  </button>
                )}
              </div>
            </div>

            {/* Quick tips */}
            <div className="text-xs text-gray-400 text-center">
              <p>
                Tip: Press number keys 1-4 to quickly select answers <br />{" "}
                Press Enter → Next
              </p>
            </div>
          </div>
        </div>
      </div>

      {showResult && (
        <ResultPopup
          score={score}
          total={topic.mcqs.length}
          onRestart={handleRestart}
          onClose={() => setShowResult(false)}
          timeSpent={formatTime(30 * 60 - timeRemaining)}
        />
      )}

      {/* Toast notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
            fontWeight: "500",
            borderRadius: "8px",
            padding: "8px 16px",
          },
          success: {
            style: {
              background: "#10B981",
            },
          },
          error: {
            style: {
              background: "#EF4444",
            },
          },
        }}
      />
    </div>
  );
}
