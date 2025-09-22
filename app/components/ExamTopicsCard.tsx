"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  examCategoryList,
  ExamCategory,
  ExamTopic,
  ExamMCQ,
} from "../../dataImp";

interface QuizState {
  currentCategory: ExamCategory | null;
  currentTopic: ExamTopic | null;
  currentQuestionIndex: number;
  userAnswers: { [questionId: number]: string };
  showResults: boolean;
  score: number;
  quizStarted: boolean;
  hasAnsweredCurrent: boolean;
}

const ExamTopicCard: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentCategory: null,
    currentTopic: null,
    currentQuestionIndex: 0,
    userAnswers: {},
    showResults: false,
    score: 0,
    quizStarted: false,
    hasAnsweredCurrent: false,
  });

  const [allCategories] = useState<ExamCategory[]>(examCategoryList);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback(async () => {
    setIsTransitioning(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setIsTransitioning(false);
  }, []);

  const startQuiz = async (category: ExamCategory, topic: ExamTopic) => {
    await startTransition();
    setQuizState({
      currentCategory: category,
      currentTopic: topic,
      currentQuestionIndex: 0,
      userAnswers: {},
      showResults: false,
      score: 0,
      quizStarted: true,
      hasAnsweredCurrent: false,
    });
  };

  const startCategoryQuiz = async (category: ExamCategory) => {
    await startTransition();
    const allQuestions: ExamMCQ[] = category.topics.flatMap(
      (topic: ExamTopic) => topic.mcqs
    );
    const megaTopic: ExamTopic = {
      id: 0,
      name: `All ${category.name} Questions`,
      description: `All MCQs from ${category.name}`,
      mcqs: allQuestions,
    };

    setQuizState({
      currentCategory: category,
      currentTopic: megaTopic,
      currentQuestionIndex: 0,
      userAnswers: {},
      showResults: false,
      score: 0,
      quizStarted: true,
      hasAnsweredCurrent: false,
    });
  };

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setQuizState((prev) => ({
      ...prev,
      userAnswers: {
        ...prev.userAnswers,
        [questionId]: answer,
      },
      hasAnsweredCurrent: true,
    }));
  };

  const nextQuestion = useCallback(async () => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion || !quizState.currentTopic) return;

    if (!(currentQuestion.id in quizState.userAnswers)) {
      return;
    }

    await startTransition();

    if (
      quizState.currentQuestionIndex <
      quizState.currentTopic.mcqs.length - 1
    ) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        hasAnsweredCurrent:
          prev.userAnswers[
            quizState.currentTopic!.mcqs[prev.currentQuestionIndex + 1].id
          ] !== undefined,
      }));
    } else {
      submitQuiz();
    }
  }, [
    quizState.currentTopic,
    quizState.currentQuestionIndex,
    quizState.userAnswers,
    startTransition,
  ]);

  const prevQuestion = async () => {
    if (quizState.currentQuestionIndex > 0) {
      await startTransition();
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        hasAnsweredCurrent:
          prev.userAnswers[
            quizState.currentTopic!.mcqs[prev.currentQuestionIndex - 1].id
          ] !== undefined,
      }));
    }
  };

  const goToQuestion = async (index: number) => {
    if (index >= 0 && index < (quizState.currentTopic?.mcqs.length || 0)) {
      await startTransition();
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: index,
        hasAnsweredCurrent:
          prev.userAnswers[quizState.currentTopic!.mcqs[index].id] !==
          undefined,
      }));
    }
  };

  const submitQuiz = () => {
    if (!quizState.currentTopic) return;

    let score = 0;
    quizState.currentTopic.mcqs.forEach((question: ExamMCQ) => {
      if (quizState.userAnswers[question.id] === question.answer) {
        score++;
      }
    });

    setQuizState((prev) => ({
      ...prev,
      showResults: true,
      score,
    }));
  };

  const restartQuiz = async () => {
    await startTransition();
    setQuizState({
      currentCategory: null,
      currentTopic: null,
      currentQuestionIndex: 0,
      userAnswers: {},
      showResults: false,
      score: 0,
      quizStarted: false,
      hasAnsweredCurrent: false,
    });
  };

  const getCurrentQuestion = (): ExamMCQ | null => {
    if (!quizState.currentTopic) return null;
    return quizState.currentTopic.mcqs[quizState.currentQuestionIndex] || null;
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!quizState.quizStarted || quizState.showResults) return;

      const currentQuestion = getCurrentQuestion();
      if (!currentQuestion) return;

      if (event.key >= "1" && event.key <= "4") {
        const optionIndex = parseInt(event.key) - 1;
        if (optionIndex < currentQuestion.options.length) {
          handleAnswerSelect(
            currentQuestion.id,
            currentQuestion.options[optionIndex]
          );
        }
      }

      if (event.key === "Enter" && quizState.hasAnsweredCurrent) {
        nextQuestion();
      }

      if (event.key === "ArrowRight" && quizState.hasAnsweredCurrent) {
        nextQuestion();
      }
      if (event.key === "ArrowLeft") {
        prevQuestion();
      }

      if (event.key === " " && !event.repeat) {
        event.preventDefault();
        const currentQuestion = getCurrentQuestion();
        if (currentQuestion) {
          const currentAnswer = quizState.userAnswers[currentQuestion.id];
          if (!currentAnswer) {
            handleAnswerSelect(currentQuestion.id, currentQuestion.options[0]);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [quizState, nextQuestion]);

  if (!quizState.quizStarted) {
    return (
      <div className="quiz-container min-h-screen bg-gray-900 py-6 px-3 sm:py-8 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6 sm:mb-8">
            AI & Python Quiz Platform
          </h1>

          <div className="space-y-6">
            {allCategories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden transition-transform hover:scale-[1.02]"
              >
                {/* Left Section */}
                <div className="flex-1 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {category.name}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                    {category.description}
                  </p>

                  <button
                    onClick={() => startCategoryQuiz(category)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 
                           hover:from-blue-700 hover:to-purple-700 
                           text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md 
                           transition-all duration-300 mb-3 font-medium 
                           transform hover:scale-105 text-sm sm:text-base"
                  >
                    Start Full Quiz (
                    {category.topics.flatMap((t: ExamTopic) => t.mcqs).length}{" "}
                    questions)
                  </button>
                </div>

                {/* Right Section */}
                <div className="flex-1 bg-gray-900 p-4 sm:p-6">
                  <h3 className="font-medium text-gray-300 mb-2 text-sm sm:text-base">
                    Topics:
                  </h3>
                  <div className="space-y-2">
                    {category.topics.map((topic: ExamTopic) => (
                      <button
                        key={topic.id}
                        onClick={() => startQuiz(category, topic)}
                        className="w-full text-left bg-gray-700 hover:bg-gray-600 
                               rounded-md px-3 sm:px-4 py-2 sm:py-3 
                               text-xs sm:text-sm transition-all duration-200 
                               text-white transform hover:translate-x-2"
                      >
                        {topic.name} ({topic.mcqs.length} questions)
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = getCurrentQuestion();
  if (!currentQuestion || !quizState.currentTopic) return null;

  if (quizState.showResults) {
    const totalQuestions = quizState.currentTopic.mcqs.length;
    const percentage = Math.round((quizState.score / totalQuestions) * 100);

    return (
      <div
        className={`quiz-results min-h-screen bg-gray-900 py-8 px-4 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
            Quiz Results
          </h2>

          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-48 h-48 rounded-full flex items-center justify-center border-8 border-gray-700">
                <div
                  className={`text-5xl font-bold ${
                    percentage >= 80
                      ? "text-green-400"
                      : percentage >= 60
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {percentage}%
                </div>
              </div>
              <div
                className="absolute inset-0 rounded-full border-8 border-transparent"
                style={{
                  background: `conic-gradient(
                       ${
                         percentage >= 80
                           ? "#10B981"
                           : percentage >= 60
                           ? "#F59E0B"
                           : "#EF4444"
                       } 
                       ${percentage * 3.6}deg, 
                       #4B5563 ${percentage * 3.6}deg
                     )`,
                }}
              ></div>
            </div>
            <p className="text-gray-300 mt-4 text-lg">
              You scored {quizState.score} out of {totalQuestions} questions
            </p>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={restartQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-md transition-all duration-300 font-medium transform hover:scale-105"
            >
              Take Another Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const hasAnswered = currentQuestion.id in quizState.userAnswers;
  const userAnswer = quizState.userAnswers[currentQuestion.id];
  const isCorrect = userAnswer === currentQuestion.answer;

  return (
  <div
    className={`quiz-interface min-h-screen bg-gray-900 py-6 px-3 sm:py-8 sm:px-4 transition-opacity duration-300 ${
      isTransitioning ? "opacity-0" : "opacity-100"
    }`}
  >
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-6 border border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4">
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              {quizState.currentTopic.name}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">
              {quizState.currentCategory?.name}
            </p>
          </div>
          <div className="bg-blue-900 text-blue-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mt-2 sm:mt-0">
            Question {quizState.currentQuestionIndex + 1} of{" "}
            {quizState.currentTopic.mcqs.length}
          </div>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 sm:h-3 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${
                ((quizState.currentQuestionIndex + 1) /
                  quizState.currentTopic.mcqs.length) *
                100
              }%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question + Options */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-6 border border-gray-700">
        <h2 className="text-base sm:text-xl font-semibold text-white mb-4 sm:mb-6 leading-relaxed">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {currentQuestion.options.map((option: string, index: number) => {
            const isSelected = userAnswer === option;
            const isCorrectOption = option === currentQuestion.answer;
            const letter = String.fromCharCode(65 + index);
            const numberKey = index + 1;

            let buttonClass =
              "w-full text-left p-3 sm:p-4 rounded-lg border-2 text-sm sm:text-base transition-all duration-200 transform ";

            if (hasAnswered) {
              if (isCorrectOption) {
                buttonClass +=
                  "border-green-500 bg-green-900/20 text-green-300 scale-105";
              } else if (isSelected && !isCorrectOption) {
                buttonClass += "border-red-500 bg-red-900/20 text-red-300";
              } else {
                buttonClass += "border-gray-600 bg-gray-750 text-gray-400";
              }
            } else {
              buttonClass += isSelected
                ? "border-blue-500 bg-blue-900/20 text-white scale-105"
                : "border-gray-600 bg-gray-750 hover:border-gray-500 hover:bg-gray-700 text-white hover:scale-102";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentQuestion.id, option)}
                className={buttonClass}
                disabled={hasAnswered}
              >
                <div className="flex items-center">
                  <span
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 font-semibold text-sm sm:text-base transition-all ${
                      hasAnswered
                        ? isCorrectOption
                          ? "bg-green-500 text-white"
                          : isSelected
                          ? "bg-red-500 text-white"
                          : "bg-gray-600 text-gray-400"
                        : isSelected
                        ? "bg-blue-500 text-white"
                        : "bg-gray-600 text-gray-300"
                    }`}
                  >
                    {letter}
                  </span>
                  <span className="flex-1 text-left">{option}</span>
                  <span className="ml-2 text-[10px] sm:text-xs text-gray-500 bg-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    {numberKey}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {hasAnswered && (
          <div
            className={`mt-5 sm:mt-6 p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 ${
              isCorrect
                ? "border-green-500 bg-green-900/20"
                : "border-red-500 bg-red-900/20"
            }`}
          >
            <p
              className={
                isCorrect
                  ? "text-green-300 font-medium text-sm sm:text-base"
                  : "text-red-300 font-medium text-sm sm:text-base"
              }
            >
              {isCorrect ? "✓ Correct!" : "✗ Incorrect!"}
              {!isCorrect && (
                <span className="block mt-2 text-gray-300">
                  The correct answer is:{" "}
                  <strong className="text-green-300">
                    {currentQuestion.answer}
                  </strong>
                </span>
              )}
            </p>
            {currentQuestion.explanation && (
              <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">
                {currentQuestion.explanation}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
        <button
          onClick={prevQuestion}
          disabled={quizState.currentQuestionIndex === 0}
          className={`py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium text-sm sm:text-base transition-all duration-200 ${
            quizState.currentQuestionIndex === 0
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gray-600 text-white hover:bg-gray-500 transform hover:scale-105"
          }`}
        >
          ← Previous
        </button>

        {quizState.currentQuestionIndex ===
        quizState.currentTopic.mcqs.length - 1 ? (
          <button
            onClick={submitQuiz}
            disabled={!hasAnswered}
            className={`py-2 sm:py-3 px-6 sm:px-8 rounded-md font-medium text-sm sm:text-base transition-all duration-200 ${
              hasAnswered
                ? "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transform hover:scale-105"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            disabled={!hasAnswered}
            className={`py-2 sm:py-3 px-6 sm:px-8 rounded-md font-medium text-sm sm:text-base transition-all duration-200 ${
              hasAnswered
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            Next <span className="text-[10px] sm:text-xs ml-2 opacity-75">(Enter)</span>
          </button>
        )}
      </div>

      {/* Question Navigation */}
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-6 sm:mt-8">
        {quizState.currentTopic.mcqs.map(
          (question: ExamMCQ, index: number) => {
            const hasAnswer = quizState.userAnswers[question.id];
            const isCurrent = index === quizState.currentQuestionIndex;
            const isCorrectAnswer =
              hasAnswer && quizState.userAnswers[question.id] === question.answer;

            return (
              <button
                key={index}
                onClick={() => goToQuestion(index)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-medium text-xs sm:text-base transition-all duration-200 transform hover:scale-110 ${
                  isCurrent
                    ? "bg-blue-500 text-white scale-110 ring-2 ring-blue-300"
                    : hasAnswer
                    ? isCorrectAnswer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-600 text-gray-300"
                }`}
                title={`Question ${index + 1}${
                  hasAnswer ? " (Answered)" : " (Unanswered)"
                }`}
              >
                {index + 1}
              </button>
            );
          }
        )}
      </div>

      {/* Shortcuts */}
      <div className="text-center mt-5 sm:mt-6 text-gray-500 text-[10px] sm:text-sm">
        <p className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <span className="flex items-center gap-1">
            <kbd className="bg-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">1-4</kbd>{" "}
            Select
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">← →</kbd>{" "}
            Navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">Enter</kbd>{" "}
            Continue
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">Space</kbd>{" "}
            Quick
          </span>
        </p>
      </div>
    </div>
  </div>
);

};

export default ExamTopicCard;
