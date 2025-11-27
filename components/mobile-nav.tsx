"use client"

import { Home, Settings, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import type { AppView } from "@/app/page"

interface MobileNavProps {
  currentView: AppView
  onNavigate: (view: AppView) => void
  canNavigate: boolean
}

export default function MobileNav({ currentView, onNavigate, canNavigate }: MobileNavProps) {
  const navItems = [
    { id: "landing" as AppView, icon: Home, label: "Home" },
    { id: "customization" as AppView, icon: Settings, label: "Settings" },
    { id: "review" as AppView, icon: BookOpen, label: "Review" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-xl border-t border-border safe-area-bottom">
      <div className="max-w-lg mx-auto flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive =
            currentView === item.id ||
            (item.id === "customization" && (currentView === "quiz" || currentView === "complete"))

          return (
            <button
              key={item.id}
              onClick={() => canNavigate && onNavigate(item.id)}
              disabled={!canNavigate}
              className={cn(
                "flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all touch-feedback",
                isActive ? "text-foreground" : "text-muted-foreground",
                !canNavigate && "opacity-50 cursor-not-allowed",
              )}
            >
              <item.icon
                className={cn("w-6 h-6 transition-all", isActive && "scale-110")}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
