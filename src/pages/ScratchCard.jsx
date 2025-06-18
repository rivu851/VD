"use client"

import { useState, useRef, useEffect } from "react"

// Possible discount values
const discountOptions = [5, 10, 15, 20, 25, 30, 8, 10]

function ScratchCard({ onDiscountWon, gameCompleted }) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [discount, setDiscount] = useState(null)
  const [scratchPercentage, setScratchPercentage] = useState(0)
  const canvasRef = useRef(null)
  const overlayCanvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const lastPositionRef = useRef({ x: 0, y: 0 })

  // Initialize the scratch card
  useEffect(() => {
    if (gameCompleted) return

    // Select a random discount
    const randomDiscount = discountOptions[Math.floor(Math.random() * discountOptions.length)]
    setDiscount(randomDiscount)

    // Draw the base canvas (what's underneath)
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#4158D0")
    gradient.addColorStop(0.5, "#C850C0")
    gradient.addColorStop(1, "#FFCC70")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw discount text
    ctx.fillStyle = "#fff"
    ctx.font = "bold 48px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    if (randomDiscount > 0) {
      ctx.fillText(`${randomDiscount}%`, canvas.width / 2, canvas.height / 2 - 20)
      ctx.font = "bold 24px Arial"
      ctx.fillText("DISCOUNT", canvas.width / 2, canvas.height / 2 + 20)
    } else {
      ctx.fillText("Try Again", canvas.width / 2, canvas.height / 2)
    }

    // Draw the overlay canvas (the scratch layer)
    const overlayCanvas = overlayCanvasRef.current
    const overlayCtx = overlayCanvas.getContext("2d")

    // Fill with scratch-off color
    overlayCtx.fillStyle = "#888"
    overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height)

    // Add some texture/pattern
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * overlayCanvas.width
      const y = Math.random() * overlayCanvas.height
      overlayCtx.fillStyle = "#777"
      overlayCtx.fillRect(x, y, 2, 2)
    }

    // Add text prompt
    overlayCtx.fillStyle = "#fff"
    overlayCtx.font = "bold 20px Arial"
    overlayCtx.textAlign = "center"
    overlayCtx.textBaseline = "middle"
    overlayCtx.fillText("Scratch here to reveal your discount!", overlayCanvas.width / 2, overlayCanvas.height / 2)
  }, [gameCompleted])

  // Handle scratch interactions
  const handleScratch = (e) => {
    if (isRevealed || gameCompleted) return

    const overlayCanvas = overlayCanvasRef.current
    const overlayCtx = overlayCanvas.getContext("2d")

    const rect = overlayCanvas.getBoundingClientRect()
    const scaleX = overlayCanvas.width / rect.width
    const scaleY = overlayCanvas.height / rect.height

    // Get position (handle both mouse and touch)
    const clientX = e.clientX || (e.touches && e.touches[0].clientX)
    const clientY = e.clientY || (e.touches && e.touches[0].clientY)

    if (!clientX || !clientY) return

    const x = (clientX - rect.left) * scaleX
    const y = (clientY - rect.top) * scaleY

    // Scratch effect (erase a circle)
    overlayCtx.globalCompositeOperation = "destination-out"
    overlayCtx.beginPath()
    overlayCtx.arc(x, y, 20, 0, Math.PI * 2)
    overlayCtx.fill()

    // Draw a line from last position for smoother scratching
    if (isDrawing) {
      overlayCtx.beginPath()
      overlayCtx.lineWidth = 40
      overlayCtx.lineCap = "round"
      overlayCtx.moveTo(lastPositionRef.current.x, lastPositionRef.current.y)
      overlayCtx.lineTo(x, y)
      overlayCtx.stroke()
    }

    lastPositionRef.current = { x, y }

    // Calculate how much has been scratched
    calculateScratchPercentage()
  }

  const calculateScratchPercentage = () => {
    const overlayCanvas = overlayCanvasRef.current
    const overlayCtx = overlayCanvas.getContext("2d")

    const imageData = overlayCtx.getImageData(0, 0, overlayCanvas.width, overlayCanvas.height)
    const pixelData = imageData.data

    let transparentPixels = 0
    const totalPixels = pixelData.length / 4

    for (let i = 3; i < pixelData.length; i += 4) {
      if (pixelData[i] === 0) {
        transparentPixels++
      }
    }

    const percentage = (transparentPixels / totalPixels) * 100
    setScratchPercentage(percentage)

    // Auto-reveal when enough is scratched
    if (percentage > 50 && !isRevealed) {
      revealCard()
    }
  }

  const revealCard = () => {
    setIsRevealed(true)
    onDiscountWon(discount)

    // Fully clear the overlay
    const overlayCanvas = overlayCanvasRef.current
    const overlayCtx = overlayCanvas.getContext("2d")
    overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height)
  }

  const startDrawing = (e) => {
    if (isRevealed || gameCompleted) return
    setIsDrawing(true)
    handleScratch(e)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  return (
    <div className="flex flex-col items-center py-8">
      <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-gray-300 rounded-lg overflow-hidden cursor-pointer">
        <canvas ref={canvasRef} width={400} height={400} className="absolute top-0 left-0 w-full h-full" />
        <canvas
          ref={overlayCanvasRef}
          width={400}
          height={400}
          className="absolute top-0 left-0 w-full h-full"
          onMouseDown={startDrawing}
          onMouseMove={handleScratch}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={handleScratch}
          onTouchEnd={stopDrawing}
        />
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          {isRevealed
            ? "Discount revealed!"
            : `Scratch the card to reveal your discount! (${Math.round(scratchPercentage)}% scratched)`}
        </p>
      </div>

      {isRevealed && (
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold text-gray-800">
            {discount > 0 ? `Congratulations! You won ${discount}% discount!` : "Sorry, try again next time!"}
          </h3>
        </div>
      )}

      <button
        onClick={revealCard}
        disabled={isRevealed || gameCompleted}
        className={`mt-4 px-6 py-2 rounded transition-colors duration-300 ${
          isRevealed || gameCompleted
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
        }`}
      >
        Reveal Instantly
      </button>
    </div>
  )
}

export default ScratchCard
