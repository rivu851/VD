'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

// Discount options for the wheel
const segments = [
  { text: '5%', color: '#FF6384', discount: 5 },
  { text: '10%', color: '#36A2EB', discount: 10 },
  { text: '15%', color: '#FFCE56', discount: 15 },
  { text: '20%', color: '#4BC0C0', discount: 20 },
  { text: '25%', color: '#9966FF', discount: 25 },
  { text: '30%', color: '#FF9F40', discount: 30 },
  { text: 'Try Again', color: '#C9CBCF', discount: 0 },
  { text: '50%', color: '#8BC34A', discount: 50 },
];

const SPIN_DURATION = 3000; // milliseconds
const MIN_ROTATIONS = 3;
const MAX_ROTATIONS = 5;

function SpinWheel({ onDiscountWon = () => {}, gameCompleted = false }) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const canvasRef = useRef(null);

  // Draw the wheel every time the rotation changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 12;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw outer rim for a nicer look
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#e5e7eb'; // Tailwind gray‑200
    ctx.stroke();

    // Draw segments
    const segmentAngle = (2 * Math.PI) / segments.length;
    segments.forEach((segment, i) => {
      const startAngle = i * segmentAngle;
      const endAngle = (i + 1) * segmentAngle;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = segment.color;
      ctx.fill();

      // Segment text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + segmentAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Arial';
      ctx.fillText(segment.text, radius - 20, 5);
      ctx.restore();
    });
  }, [rotation]);

  // Spin logic (shared by button & wheel click)
  const spinWheel = useCallback(() => {
    if (isSpinning || gameCompleted) return;

    setIsSpinning(true);
    setResult(null);

    const totalRotations = MIN_ROTATIONS + Math.random() * (MAX_ROTATIONS - MIN_ROTATIONS);
    const totalDegrees = totalRotations * 360;

    // Pick a random segment to stop at
    const randomSegment = Math.floor(Math.random() * segments.length);
    const segmentAngle = 360 / segments.length;
    const segmentOffset = Math.random() * segmentAngle;
    const stopAngle = randomSegment * segmentAngle + segmentOffset;

    const finalRotation = totalDegrees + stopAngle;
    const startTime = performance.now();
    const startRotation = rotation;

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / SPIN_DURATION, 1);

      // Cubic ease‑out for a natural feel
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const currentRotation = startRotation + finalRotation * easeOutCubic(progress);

      setRotation(currentRotation % 360);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Determine winning segment
        const normalized = currentRotation % 360;
        const index = Math.floor(normalized / segmentAngle) % segments.length;
        const landedSegment = segments[(segments.length - 1 - index + segments.length) % segments.length];

        setResult(landedSegment);
        setIsSpinning(false);
        onDiscountWon(landedSegment.discount);
      }
    };

    requestAnimationFrame(animate);
  }, [isSpinning, gameCompleted, rotation, onDiscountWon]);

  return (
    <div className="flex flex-col items-center py-8 select-none">
      {/* Wheel */}
      <div
        className={`relative mb-6 rounded-full shadow-xl shadow-black/40 transition-transform duration-150 ease-out ${
          isSpinning ? 'cursor-progress' : 'cursor-pointer hover:scale-105 active:scale-95'
        }`}
        onClick={spinWheel}
      >
        <div
          className="w-64 h-64 md:w-80 md:h-80"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <canvas ref={canvasRef} width={320} height={320} className="w-full h-full" />
        </div>
        {/* Static pointer */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-[16px] border-transparent border-b-red-600 drop-shadow-md" />
        </div>
      </div>

      {/* Spin button (optional) */}
      <button
        type="button"
        onClick={spinWheel}
        disabled={isSpinning || gameCompleted}
        className={`mt-4 inline-flex items-center gap-2 rounded-lg px-8 py-3 text-lg font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
          isSpinning
            ? 'bg-gray-400 text-white cursor-not-allowed animate-pulse'
            : gameCompleted
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
        }`}
      >
        {isSpinning ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              />
            </svg>
            Spinning…
          </>
        ) : gameCompleted ? (
          'Game Completed'
        ) : (
          'Spin the Wheel'
        )}
      </button>

      {/* Result message */}
      {result && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 drop-shadow-sm">
            {result.discount > 0
              ? `Congratulations! You won ${result.discount}% discount!`
              : 'Sorry, try again next time!'}
          </h3>
        </div>
      )}
    </div>
  );
}

export default SpinWheel;
