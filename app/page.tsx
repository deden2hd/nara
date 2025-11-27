"use client"

import { useState } from "react"
import LandingPage from "@/components/landing-page"
import CustomizationPage from "@/components/customization-page"
import QuizPage from "@/components/quiz-page"
import ReviewPage from "@/components/review-page"
import QuizCompletePage from "@/components/quiz-complete-page"
import StrokeOrderModal from "@/components/stroke-order-modal"
import MobileNav from "@/components/mobile-nav"
import type { QuizConfig, SRSData, KanaType, QuizItem } from "@/lib/kana-data"

export type AppView = "landing" | "customization" | "quiz" | "review" | "complete"

export default function KanaQuizApp() {
  const [view, setView] = useState<AppView>("landing")
  const [quizConfig, setQuizConfig] = useState<QuizConfig>({
    selectedTypes: ["plain", "tenten"],
    selectedRows: ["a", "k", "s"],
    kanaType: "hiragana",
  })
  const [srsData, setSrsData] = useState<SRSData>({})
  const [currentQuizSet, setCurrentQuizSet] = useState<QuizItem[]>([])
  const [quizResults, setQuizResults] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 })
  const [isTrainingHard, setIsTrainingHard] = useState(false)
  const [modalChar, setModalChar] = useState<string | null>(null)

  const handleSelectKanaSet = (type: KanaType) => {
    setQuizConfig((prev) => ({ ...prev, kanaType: type }))
    setView("customization")
  }

  const handleUpdateConfig = (type: "row" | "type", value: string, isChecked: boolean) => {
    setQuizConfig((prev) => {
      if (type === "row") {
        const newRows = isChecked ? [...prev.selectedRows, value] : prev.selectedRows.filter((r) => r !== value)
        return { ...prev, selectedRows: newRows }
      } else {
        const newTypes = isChecked ? [...prev.selectedTypes, value] : prev.selectedTypes.filter((t) => t !== value)
        return { ...prev, selectedTypes: newTypes }
      }
    })
  }

  const handleUpdateSRS = (char: string, isCorrect: boolean) => {
    setSrsData((prev) => {
      const current = prev[char] || { correct: 0, incorrect: 0 }
      if (isCorrect) {
        return {
          ...prev,
          [char]: {
            correct: current.correct + 1,
            incorrect: Math.max(0, current.incorrect - 1),
            lastReviewed: new Date().toISOString(),
          },
        }
      } else {
        return {
          ...prev,
          [char]: {
            correct: 0,
            incorrect: current.incorrect + 1,
            lastReviewed: new Date().toISOString(),
          },
        }
      }
    })
  }

  return (
    <div className="min-h-[100dvh] bg-background flex flex-col">
      {/* Mobile status bar spacer */}
      <div className="safe-area-top bg-background" />

      {/* Main content area - scrollable */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto px-4 py-6 pb-24">
          {view === "landing" && <LandingPage onSelectKanaSet={handleSelectKanaSet} srsData={srsData} />}

          {view === "customization" && (
            <CustomizationPage
              config={quizConfig}
              srsData={srsData}
              onBack={() => setView("landing")}
              onUpdateConfig={handleUpdateConfig}
              onStartQuiz={(quizSet, isHard) => {
                setCurrentQuizSet(quizSet)
                setIsTrainingHard(isHard)
                setView("quiz")
              }}
              onReview={() => setView("review")}
            />
          )}

          {view === "quiz" && (
            <QuizPage
              quizSet={currentQuizSet}
              onUpdateSRS={handleUpdateSRS}
              onComplete={(correct, total) => {
                setQuizResults({ correct, total })
                setView("complete")
              }}
            />
          )}

          {view === "review" && (
            <ReviewPage
              config={quizConfig}
              srsData={srsData}
              onBack={() => setView("customization")}
              onShowStroke={setModalChar}
            />
          )}

          {view === "complete" && (
            <QuizCompletePage
              correct={quizResults.correct}
              total={quizResults.total}
              isTrainingHard={isTrainingHard}
              onBackToCustomization={() => setView("customization")}
              onRestartQuiz={() => setView("quiz")}
            />
          )}
        </div>
      </main>

      {/* Bottom navigation - fixed */}
      <MobileNav currentView={view} onNavigate={setView} canNavigate={view !== "quiz"} />

      {/* Modals */}
      <StrokeOrderModal char={modalChar} kanaType={quizConfig.kanaType} onClose={() => setModalChar(null)} />
    </div>
  )
}
