"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { type QuizItem, CONTEXT_WORDS } from "@/lib/kana-data"
import { Check, X } from "lucide-react"

interface QuizPageProps {
  quizSet: QuizItem[]
  onUpdateSRS: (char: string, isCorrect: boolean) => void
  onComplete: (correct: number, total: number) => void
}

export default function QuizPage({ quizSet, onUpdateSRS, onComplete }: QuizPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [animationClass, setAnimationClass] = useState("")

  const currentQuiz = quizSet[currentIndex]
  const progress = (currentIndex / quizSet.length) * 100

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= quizSet.length) {
      onComplete(correctCount, quizSet.length)
    } else {
      setCurrentIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setAnimationClass("")
    }
  }, [currentIndex, quizSet.length, correctCount, onComplete])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isAnswered) {
        handleNext()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isAnswered, handleNext])

  const handleAnswer = (answer: string) => {
    if (isAnswered) return
    const isCorrect = answer === currentQuiz.correctRomaji
    setSelectedAnswer(answer)
    setIsAnswered(true)
    onUpdateSRS(currentQuiz.kana, isCorrect)

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1)
      setAnimationClass("animate-bounce-in")
    } else {
      setAnimationClass("animate-shake")
    }
  }

  const relatedWord = CONTEXT_WORDS.find((w) => w.chars.includes(currentQuiz.kana))
  const isCorrect = selectedAnswer === currentQuiz.correctRomaji

  return (
    <div className="animate-fade-in">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Progres</span>
          <span className="font-medium text-foreground">
            {currentIndex + 1}/{quizSet.length}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-foreground h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Kana display */}
      <div className="text-center py-12 mb-8">
        <p className="text-sm text-muted-foreground mb-4">Apa romaji untuk:</p>
        <p className={cn("text-9xl font-bold text-foreground leading-none", animationClass)}>{currentQuiz.kana}</p>
      </div>

      {/* Options grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {currentQuiz.options.map((option) => {
          const isSelected = selectedAnswer === option
          const isCorrectOption = option === currentQuiz.correctRomaji

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
              className={cn(
                "relative p-5 rounded-2xl border-2 font-semibold text-xl transition-all touch-feedback",
                !isAnswered && "bg-card border-border hover:border-foreground/30",
                isAnswered && isCorrectOption && "bg-kana-success/10 border-kana-success text-kana-success",
                isAnswered && isSelected && !isCorrectOption && "bg-kana-error/10 border-kana-error text-kana-error",
                isAnswered && !isSelected && !isCorrectOption && "opacity-40",
              )}
            >
              {option.toUpperCase()}
              {isAnswered && isCorrectOption && (
                <div className="absolute top-2 right-2">
                  <Check className="w-5 h-5 text-kana-success" />
                </div>
              )}
              {isAnswered && isSelected && !isCorrectOption && (
                <div className="absolute top-2 right-2">
                  <X className="w-5 h-5 text-kana-error" />
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Feedback */}
      {isAnswered && (
        <div
          className={cn("rounded-2xl p-4 mb-6 animate-slide-up", isCorrect ? "bg-kana-success/10" : "bg-kana-error/10")}
        >
          <p className={cn("font-semibold mb-1", isCorrect ? "text-kana-success" : "text-kana-error")}>
            {isCorrect ? "Benar!" : "Salah!"}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">{currentQuiz.kana}</span>
            {" = "}
            <span className="font-bold text-foreground">{currentQuiz.correctRomaji.toUpperCase()}</span>
          </p>
          {relatedWord && isCorrect && (
            <p className="text-sm text-muted-foreground mt-2">
              Contoh: <span className="font-medium text-foreground">{relatedWord.word}</span> ({relatedWord.meaning})
            </p>
          )}
        </div>
      )}

      {/* Next button */}
      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full py-4 bg-foreground text-background rounded-2xl font-semibold text-lg touch-feedback animate-slide-up"
        >
          Lanjut
        </button>
      )}
    </div>
  )
}
