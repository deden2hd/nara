"use client"

import { ArrowLeft, Play, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import {
  type QuizConfig,
  type SRSData,
  CONSONANT_ROWS,
  KANA_TYPES,
  filterKana,
  generateQuizSet,
  getHardCharsCount,
  type QuizItem,
} from "@/lib/kana-data"

interface CustomizationPageProps {
  config: QuizConfig
  srsData: SRSData
  onBack: () => void
  onUpdateConfig: (type: "row" | "type", value: string, isChecked: boolean) => void
  onStartQuiz: (quizSet: QuizItem[], isHard: boolean) => void
  onReview: () => void
}

export default function CustomizationPage({
  config,
  srsData,
  onBack,
  onUpdateConfig,
  onStartQuiz,
}: CustomizationPageProps) {
  const [showTypes, setShowTypes] = useState(false)
  const [showRows, setShowRows] = useState(false)
  const hardCharsCount = getHardCharsCount(srsData)
  const filteredKana = filterKana(config)

  const handleStartCustomQuiz = () => {
    if (filteredKana.length === 0) {
      alert("Pilih setidaknya satu jenis huruf dan baris konsonan.")
      return
    }
    const quizSet = generateQuizSet(filteredKana)
    onStartQuiz(quizSet, false)
  }

  const handleStartSRSQuiz = () => {
    const srsFilteredKana = filterKana(config, srsData, true)
    if (srsFilteredKana.length === 0) {
      alert("Belum ada huruf sulit untuk dilatih.")
      return
    }
    const quizSet = generateQuizSet(srsFilteredKana)
    onStartQuiz(quizSet, true)
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-muted touch-feedback"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-foreground">
            {config.kanaType === "hiragana" ? "Hiragana" : "Katakana"}
          </h1>
          <p className="text-sm text-muted-foreground">{filteredKana.length} huruf dipilih</p>
        </div>
      </div>

      {/* Quick stats */}
      <div className="bg-card rounded-2xl border border-border p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Huruf sulit</p>
            <p className="text-2xl font-bold text-foreground">{hardCharsCount}</p>
          </div>
          {hardCharsCount > 0 && (
            <button
              onClick={handleStartSRSQuiz}
              className="flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-xl font-medium text-sm touch-feedback"
            >
              <Zap className="w-4 h-4" />
              Latih Sekarang
            </button>
          )}
        </div>
      </div>

      {/* Settings sections */}
      <div className="space-y-3 mb-8">
        {/* Jenis huruf */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <button
            onClick={() => setShowTypes(!showTypes)}
            className="w-full flex items-center justify-between p-4 touch-feedback"
          >
            <div>
              <p className="font-medium text-foreground text-left">Jenis Huruf</p>
              <p className="text-sm text-muted-foreground">{config.selectedTypes.length} dipilih</p>
            </div>
            {showTypes ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>

          {showTypes && (
            <div className="px-4 pb-4 space-y-2 animate-slide-up">
              {KANA_TYPES.map((type) => (
                <label
                  key={type.id}
                  className="flex items-center gap-3 p-3 bg-muted rounded-xl cursor-pointer touch-feedback"
                >
                  <Checkbox
                    id={`type-${type.id}`}
                    checked={config.selectedTypes.includes(type.id)}
                    onCheckedChange={(checked) => onUpdateConfig("type", type.id, !!checked)}
                  />
                  <span className="text-sm font-medium text-foreground">{type.name}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Baris konsonan */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <button
            onClick={() => setShowRows(!showRows)}
            className="w-full flex items-center justify-between p-4 touch-feedback"
          >
            <div>
              <p className="font-medium text-foreground text-left">Baris Konsonan</p>
              <p className="text-sm text-muted-foreground">{config.selectedRows.length} dipilih</p>
            </div>
            {showRows ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>

          {showRows && (
            <div className="px-4 pb-4 animate-slide-up">
              <div className="grid grid-cols-2 gap-2">
                {CONSONANT_ROWS.map((row) => (
                  <label
                    key={row.id}
                    className="flex items-center gap-3 p-3 bg-muted rounded-xl cursor-pointer touch-feedback"
                  >
                    <Checkbox
                      id={`row-${row.id}`}
                      checked={config.selectedRows.includes(row.id)}
                      onCheckedChange={(checked) => onUpdateConfig("row", row.id, !!checked)}
                    />
                    <span className="text-sm font-medium text-foreground">{row.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Start quiz button */}
      <button
        onClick={handleStartCustomQuiz}
        disabled={filteredKana.length === 0}
        className={cn(
          "w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-lg transition-all touch-feedback",
          filteredKana.length > 0
            ? "bg-foreground text-background"
            : "bg-muted text-muted-foreground cursor-not-allowed",
        )}
      >
        <Play className="w-5 h-5" />
        Mulai Kuis
      </button>
    </div>
  )
}
