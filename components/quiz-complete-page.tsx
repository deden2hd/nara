"use client"

import { RotateCcw, ArrowLeft, Share2 } from "lucide-react"

interface QuizCompletePageProps {
  correct: number
  total: number
  isTrainingHard: boolean
  onBackToCustomization: () => void
  onRestartQuiz: () => void
}

export default function QuizCompletePage({
  correct,
  total,
  isTrainingHard,
  onBackToCustomization,
  onRestartQuiz,
}: QuizCompletePageProps) {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0

  let message = ""
  let emoji = ""
  if (percentage >= 90) {
    message = "Luar biasa!"
    emoji = "🎉"
  } else if (percentage >= 70) {
    message = "Bagus sekali!"
    emoji = "👍"
  } else if (percentage >= 50) {
    message = "Terus berlatih!"
    emoji = "💪"
  } else {
    message = "Jangan menyerah!"
    emoji = "📚"
  }

  return (
    <div className="animate-fade-in text-center pt-8">
      {/* Emoji */}
      <div className="text-6xl mb-4 animate-bounce-in">{emoji}</div>

      {/* Score display */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">{message}</h1>
        <p className="text-muted-foreground">{isTrainingHard ? "Mode Latihan Huruf Sulit" : "Kuis Selesai"}</p>
      </div>

      {/* Score circle */}
      <div className="relative w-40 h-40 mx-auto mb-8">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted" />
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={440}
            strokeDashoffset={440 - (440 * percentage) / 100}
            strokeLinecap="round"
            className="text-foreground transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-foreground">{percentage}%</span>
          <span className="text-sm text-muted-foreground">
            {correct}/{total}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button
          onClick={onRestartQuiz}
          className="w-full flex items-center justify-center gap-2 py-4 bg-foreground text-background rounded-2xl font-semibold touch-feedback"
        >
          <RotateCcw className="w-5 h-5" />
          Ulangi Kuis
        </button>

        <button
          onClick={onBackToCustomization}
          className="w-full flex items-center justify-center gap-2 py-4 bg-card border border-border text-foreground rounded-2xl font-semibold touch-feedback"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Pengaturan
        </button>

        <button
          className="w-full flex items-center justify-center gap-2 py-3 text-muted-foreground touch-feedback"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "Kana Quizer",
                text: `Saya mendapat skor ${percentage}% di Kana Quizer!`,
              })
            }
          }}
        >
          <Share2 className="w-4 h-4" />
          Bagikan Skor
        </button>
      </div>
    </div>
  )
}
