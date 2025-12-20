"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Quiz Skeleton Component for loading state
function QuizSkeleton() {
  return (
    <div className="quiz-section">
      {/* Flag container skeleton */}
      <div className="flag-container">
        <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
          <span className="text-4xl opacity-30">🏴</span>
        </div>
      </div>

      {/* Question container skeleton */}
      <div className="question-container">
        <div className="clue-text opacity-50">Loading</div>
        <div className="h-8 bg-gray-800 animate-pulse rounded w-3/4 mx-auto mb-4" />
      </div>

      {/* Options skeleton */}
      <div className="options-container">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="option-btn pointer-events-none"
            style={{ opacity: 0.5 }}
          >
            <div className="h-5 bg-gray-700 animate-pulse rounded" />
          </div>
        ))}
      </div>

      {/* Button container skeleton */}
      <div className="button-container">
        <div className="btn btn-primary pointer-events-none opacity-50">
          Loading Quiz...
        </div>
      </div>
    </div>
  )
}

export default function BackroadsChallenge() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load the CSS file
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/backroads-challenge.css'
    document.head.appendChild(link)

    // Load the JavaScript file
    const script = document.createElement('script')
    script.src = '/backroads-quiz.js'
    script.async = true
    
    // Hide skeleton once quiz loads
    script.onload = () => {
      setTimeout(() => setIsLoading(false), 500)
    }
    
    document.body.appendChild(script)

    // Cleanup function
    return () => {
      document.head.removeChild(link)
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <Link href="/projects">
          <Button
            variant="outline"
            size="sm"
            className="border-[var(--brand-orange)] text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white transition-all bg-[var(--bg-primary)]/80 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Game Container */}
      <div className="container mx-auto px-4" style={{ paddingTop: '0', maxWidth: 'none' }}>
        <header>
          <h1>🌍 The Backroads Challenge</h1>

          {/* Progress Bar */}
          <div className="progress-bar-header">
            <div className="progress-fill" id="progress-fill"></div>
          </div>

          {/* Difficulty Selector */}
          <div className="difficulty-selector">
            <button className="difficulty-btn active" data-difficulty="easy">
              <span className="difficulty-icon">🏢</span>
              <span className="difficulty-name">The Boardroom</span>
              <span className="difficulty-subtitle">Tourist Level</span>
            </button>
            <button className="difficulty-btn" data-difficulty="medium">
              <span className="difficulty-icon">🛣️</span>
              <span className="difficulty-name">The Backroads</span>
              <span className="difficulty-subtitle">Traveler Level</span>
            </button>
            <button className="difficulty-btn" data-difficulty="hard">
              <span className="difficulty-icon">🧭</span>
              <span className="difficulty-name">The Explorer</span>
              <span className="difficulty-subtitle">Expert Level</span>
            </button>
          </div>

          <div className="score-board">
            <div className="score-item">
              <svg className="metric-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#D1824F"/>
              </svg>
              <span className="label">Score:</span>
              <span id="score" className="metric-value">0</span>
            </div>
            <div className="score-item">
              <svg className="metric-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5S14.5 7.62 14.5 9 13.38 11.5 12 11.5Z" fill="#D1824F"/>
              </svg>
              <span className="label">Question:</span>
              <span id="question-number" className="metric-value">1</span>/<span id="total-questions" className="metric-value">10</span>
            </div>
            <div className="score-item streak-item hidden" id="streak-container">
              <span className="label">🔥 Streak:</span>
              <span id="streak">0</span>
            </div>
          </div>
        </header>

        <main id="game-container">
          {/* Show skeleton while loading */}
          {isLoading && <QuizSkeleton />}
          
          <div className="quiz-section" style={{ display: isLoading ? 'none' : 'flex' }}>
            {/* Timer/Fuel Gauge for Medium and Hard */}
            <div className="fuel-gauge hidden" id="fuel-gauge">
              <div className="fuel-fill" id="fuel-fill"></div>
            </div>

            <div id="flag-container" className="flag-container">
              <img id="flag" src="" alt="Country Flag" />
            </div>

            <div id="question-container" className="question-container">
              <p className="clue-text" id="clue-text">Clue</p>
              <h2 id="question-text"></h2>
              <button className="hint-btn hidden" id="hint-btn">💡 Show Hint</button>
            </div>

            <div id="options-container" className="options-container">
              {/* Options will be dynamically generated */}
            </div>

            <div className="button-container">
              <button id="next-btn" className="btn btn-primary hidden">Next Question</button>
            </div>
          </div>
        </main>

        <div id="results-container" className="results-container hidden">
          <h2>Quiz Complete! 🎉</h2>
          <p className="final-score">Your Score: <span id="final-score"></span>/<span id="final-total"></span></p>
          <p className="percentage">Percentage: <span id="percentage"></span>%</p>
          <button id="restart-btn" className="btn btn-primary">Play Again</button>
        </div>
      </div>
    </div>
  )
}
