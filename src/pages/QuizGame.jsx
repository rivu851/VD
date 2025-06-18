"use client"

import { useState } from "react"
import { CheckCircle, XCircle } from "./icons"

// Quiz questions
const quizQuestions = [
  {
    question: "Which is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Thailand", "Japan", "South Korea"],
    correctAnswer: "Japan",
  },
  {
    question: "Which is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "Which city is known as the Eternal City?",
    options: ["Athens", "Rome", "Paris", "Jerusalem"],
    correctAnswer: "Rome",
  },
  {
    question: "Which is the largest desert in the world?",
    options: ["Gobi Desert", "Sahara Desert", "Antarctic Desert", "Arabian Desert"],
    correctAnswer: "Antarctic Desert",
  },
]

function QuizGame({ onDiscountWon, gameCompleted }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const handleOptionSelect = (option) => {
    if (isAnswered) return

    setSelectedOption(option)
    setIsAnswered(true)

    if (option === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
        setIsAnswered(false)
      } else {
        setShowResult(true)
        // Calculate discount based on score
        const discountPercentage = calculateDiscount(score)
        onDiscountWon(discountPercentage)
      }
    }, 1500)
  }

  const calculateDiscount = (score) => {
    // Calculate discount based on score (0-5)
    const baseDiscount = 5
    const bonusPerCorrectAnswer = 5
    return baseDiscount + score * bonusPerCorrectAnswer
  }

  if (gameCompleted) {
    return (
      <div className="text-center py-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Game Completed</h3>
        <p className="text-gray-600">You've already played this game and earned your discount.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center py-8">
      {!showResult ? (
        <div className="w-full max-w-md">
          <div className="mb-4 flex justify-between items-center text-sm font-medium text-gray-600">
            <span>
              Question {currentQuestion + 1}/{quizQuestions.length}
            </span>
            <span>
              Score: {score}/{quizQuestions.length}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-6 text-gray-800">{quizQuestions[currentQuestion].question}</h3>

          <div className="space-y-3">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`w-full text-left py-3 px-4 border rounded-lg transition-all duration-300 ${
                  isAnswered && option === quizQuestions[currentQuestion].correctAnswer
                    ? "border-green-500 bg-green-50"
                    : isAnswered && option === selectedOption && option !== quizQuestions[currentQuestion].correctAnswer
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                } ${isAnswered ? "cursor-default" : "cursor-pointer"}`}
                onClick={() => handleOptionSelect(option)}
                disabled={isAnswered}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">{option}</span>
                  {isAnswered && option === quizQuestions[currentQuestion].correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {isAnswered &&
                    option === selectedOption &&
                    option !== quizQuestions[currentQuestion].correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Quiz Completed!</h3>
          <p className="text-lg mb-2 text-gray-700">
            Your Score: {score}/{quizQuestions.length}
          </p>
          <div className="my-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <p className="text-lg text-gray-700">You earned a</p>
            <p className="text-4xl font-bold text-purple-600">{calculateDiscount(score)}% Discount!</p>
          </div>
          <p className="text-sm text-gray-500">
            {score === quizQuestions.length
              ? "Perfect score! You're a travel expert!"
              : score >= 3
                ? "Great job! You know your travel facts!"
                : "Thanks for playing! Better luck next time!"}
          </p>
        </div>
      )}
    </div>
  )
}

export default QuizGame
