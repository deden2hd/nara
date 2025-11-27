"use client"

import { X } from "lucide-react"
import { KANA_DATA, type KanaType } from "@/lib/kana-data"

interface StrokeOrderModalProps {
  char: string | null
  kanaType: KanaType
  onClose: () => void
}

export default function StrokeOrderModal({ char, kanaType, onClose }: StrokeOrderModalProps) {
  if (!char) return null

  const charObj = KANA_DATA[kanaType].find((c) => c.char === char)
  if (!charObj) return null

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-t-3xl sm:rounded-3xl shadow-xl w-full max-w-md animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle bar for mobile */}
        <div className="flex justify-center pt-3 sm:hidden">
          <div className="w-10 h-1 bg-muted rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <h3 className="text-lg font-bold text-foreground">Urutan Goresan</h3>
            <p className="text-sm text-muted-foreground">Romaji: {charObj.romaji}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-muted touch-feedback"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Character display */}
        <div className="p-8">
          <div className="w-32 h-32 mx-auto bg-muted rounded-2xl flex items-center justify-center mb-6">
            <span className="text-7xl font-bold text-foreground">{charObj.char}</span>
          </div>

          {/* Steps */}
          {charObj.steps.length > 0 ? (
            <div className="space-y-3">
              {charObj.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm text-muted-foreground pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-sm">Deskripsi tidak tersedia untuk karakter ini.</p>
          )}
        </div>

        {/* Close button */}
        <div className="p-5 pt-0">
          <button
            onClick={onClose}
            className="w-full py-4 bg-foreground text-background rounded-2xl font-semibold touch-feedback"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}
