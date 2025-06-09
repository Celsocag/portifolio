"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Moon, Sun, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/contexts/theme-context"
import { useLanguage } from "@/lib/contexts/language-context"
import { getTranslation } from "@/lib/i18n"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  const t = (key: keyof typeof import("@/lib/i18n").translations["pt-BR"]) => getTranslation(language, key)

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("experienceTitle"), href: "/#experience" },
    { name: t("projectsTitle"), href: "/#projects" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" role="navigation" aria-label={t("mainNavigation")}>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Celso Albuquerque
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label={t("toggleDarkMode")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              aria-label={t("toggleLanguage")}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === "en" ? "Português" : "English"}
            </Button>

            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/#contact">{t("contact")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label={t("toggleDarkMode")}
              className="text-gray-700 dark:text-gray-300"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {/* Mobile Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              aria-label={t("toggleLanguage")}
              className="text-gray-700 dark:text-gray-300"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "Português" : "English"}
            </Button>

            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
