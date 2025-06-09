"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { Language } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language

    if (savedLanguage && (savedLanguage === "pt-BR" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    } else {
      // Default to Portuguese BR
      setLanguage("pt-BR")
    }

    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt-BR" ? "en" : "pt-BR"))
  }

  // Prevent hydration mismatch
  const value = {
    language: mounted ? language : "pt-BR",
    toggleLanguage,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
