"use client"

import { ChevronRight } from "lucide-react"
import type { KanaType, SRSData } from "@/lib/kana-data"
import { getHardCharsCount } from "@/lib/kana-data"

interface LandingPageProps {
  onSelectKanaSet: (type: KanaType) => void
  srsData: SRSData
}

export default function LandingPage({ onSelectKanaSet, srsData }: LandingPageProps) {
  const hardCount = getHardCharsCount(srsData)
  const totalReviewed = Object.keys(srsData).length

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="text-center mb-10 pt-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Kana Quizer</h1>
        <p className="text-muted-foreground text-sm">Belajar Hiragana & Katakana</p>
      </div>

      {/* Stats cards */}
      {totalReviewed > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-8 animate-slide-up">
          <div className="bg-card rounded-2xl p-4 border border-border">
            <p className="text-2xl font-bold text-foreground">{totalReviewed}</p>
            <p className="text-xs text-muted-foreground mt-1">Huruf dipelajari</p>
          </div>
          <div className="bg-card rounded-2xl p-4 border border-border">
            <p className="text-2xl font-bold text-foreground">{hardCount}</p>
            <p className="text-xs text-muted-foreground mt-1">Perlu latihan</p>
          </div>
        </div>
      )}

      {/* Kana selection */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground mb-4 px-1">Pilih set karakter</p>

        <button
          onClick={() => onSelectKanaSet("hiragana")}
          className="w-full bg-card hover:bg-accent border border-border rounded-2xl p-5 flex items-center justify-between transition-all touch-feedback group"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center">
              <span className="text-3xl font-bold text-foreground">あ</span>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground">Hiragana</h3>
              <p className="text-sm text-muted-foreground">Karakter dasar Jepang</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => onSelectKanaSet("katakana")}
          className="w-full bg-card hover:bg-accent border border-border rounded-2xl p-5 flex items-center justify-between transition-all touch-feedback group"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center">
              <span className="text-3xl font-bold text-foreground">ア</span>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground">Katakana</h3>
              <p className="text-sm text-muted-foreground">Untuk kata asing</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Footer hint */}
      <p className="text-center text-xs text-muted-foreground mt-10">Geser ke atas untuk mulai belajar</p>
    </div>
  )
}
