"use client"

import { useState } from "react"
import SpinWheel from "./SpinWheel"
import ScratchCard from "./ScratchCard"
import QuizGame from "./QuizGame"
import { Gift, Sparkles } from "./icons"

function GameSelector({ onDiscountWon, discount, packageName }) {
  const [selectedGame, setSelectedGame] = useState(null)
  const [gameCompleted, setGameCompleted] = useState(false)

  const handleGameSelect = (game) => {
    setSelectedGame(game)
    setGameCompleted(false)
  }

  const handleDiscountWon = (discountAmount) => {
    setGameCompleted(true)
    onDiscountWon(discountAmount)
  }

  if (discount) {
    return (
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-2">
            <Gift className="w-5 h-5 text-green-500" />
            Discount Applied!
          </div>
          <p className="text-gray-600 mb-4">
            You've won a {discount}% discount on your {packageName} package!
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <p className="text-green-800">
              Your discount has been applied to your booking. Click "Complete Booking" to finalize your reservation.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {!selectedGame ? (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              Win a Discount on Your Trip!
            </div>
            <p className="text-gray-600 mb-6">Choose one game to play for a chance to win a discount on your package</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                className="flex flex-col items-center gap-3 p-6 border border-gray-200 rounded-lg hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300"
                onClick={() => handleGameSelect("spin")}
              >
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m12 12 5 3" />
                    <path d="M12 12V6" />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">Spin to Win</span>
                <span className="text-xs text-gray-500 text-center">Spin the wheel for a random discount</span>
              </button>

              <button
                className="flex flex-col items-center gap-3 p-6 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                onClick={() => handleGameSelect("scratch")}
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M2 12h10" />
                    <path d="m9 7 5 5-5 5" />
                    <path d="M17 12h5" />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">Scratch Card</span>
                <span className="text-xs text-gray-500 text-center">Scratch to reveal your discount</span>
              </button>

              <button
                className="flex flex-col items-center gap-3 p-6 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-all duration-300"
                onClick={() => handleGameSelect("quiz")}
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">Travel Quiz</span>
                <span className="text-xs text-gray-500 text-center">Answer questions to earn a discount</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {selectedGame === "spin" && "Spin to Win"}
              {selectedGame === "scratch" && "Scratch Card"}
              {selectedGame === "quiz" && "Travel Quiz"}
            </h2>
            <p className="text-gray-600 mb-6">
              {selectedGame === "spin" && "Spin the wheel to win a discount on your trip!"}
              {selectedGame === "scratch" && "Scratch the card to reveal your discount!"}
              {selectedGame === "quiz" && "Answer travel questions correctly to earn a discount!"}
            </p>
            <div className="py-4">
              {selectedGame === "spin" && <SpinWheel onDiscountWon={handleDiscountWon} gameCompleted={gameCompleted} />}
              {selectedGame === "scratch" && (
                <ScratchCard onDiscountWon={handleDiscountWon} gameCompleted={gameCompleted} />
              )}
              {selectedGame === "quiz" && <QuizGame onDiscountWon={handleDiscountWon} gameCompleted={gameCompleted} />}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GameSelector
