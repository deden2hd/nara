"use client"

import { ArrowLeft, Search } from "lucide-react"
import { useState } from "react"
import { type QuizConfig, type SRSData, filterKana } from "@/lib/kana-data"
import { cn } from "@/lib/utils"

interface ReviewPageProps {
  config: QuizConfig
  srsData: SRSData
  onBack: () => void
  onShowStroke: (char: string) => void
}

export default function ReviewPage({ config, srsData, onBack, onShowStroke }: ReviewPageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const filteredKana = filterKana(config)

  const displayKana = searchQuery
    ? filteredKana.filter(
        (k) => k.char.includes(searchQuery) || k.romaji.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : filteredKana

  if (filteredKana.length === 0) {
    return (
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-muted touch-feedback"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Review</h1>
        </div>
        <div className="bg-card rounded-2xl border border-border p-8 text-center">
          <p className="text-muted-foreground">Pilih huruf terlebih dahulu di pengaturan.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-muted touch-feedback"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-foreground">Review</h1>
          <p className="text-sm text-muted-foreground">{filteredKana.length} huruf</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Cari huruf..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-card border border-border rounded-xl py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
        />
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-kana-success/30" />
          <span>Lancar</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-kana-error/30" />
          <span>Perlu latihan</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-muted" />
          <span>Belum diuji</span>
        </div>
      </div>

      {/* Kana grid */}
      <div className="grid grid-cols-4 gap-2">
        {displayKana.map((kana) => {
          const srsInfo = srsData[kana.char] || { correct: 0, incorrect: 0 }
          const isHard = srsInfo.incorrect > srsInfo.correct && srsInfo.incorrect > 0
          const isNeutral = srsInfo.correct === 0 && srsInfo.incorrect === 0
          const isMastered = srsInfo.correct > srsInfo.incorrect && srsInfo.correct > 0

          return (
            <button
              key={kana.char}
              onClick={() => onShowStroke(kana.char)}
              className={cn(
                "aspect-square rounded-xl flex flex-col items-center justify-center transition-all touch-feedback",
                isNeutral && "bg-muted",
                isHard && "bg-kana-error/20",
                isMastered && "bg-kana-success/20",
              )}
            >
              <span className="text-2xl font-bold text-foreground">{kana.char}</span>
              <span className="text-xs text-muted-foreground mt-0.5">{kana.romaji}</span>
            </button>
          )
        })}
      </div>

      {displayKana.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">Tidak ditemukan</p>
        </div>
      )}
    </div>
  )
}
