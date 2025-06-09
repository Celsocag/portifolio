"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/contexts/language-context"
import { getTranslation } from "@/lib/i18n"

export default function Footer() {
  const { language } = useLanguage()
  const t = (key: keyof typeof import("@/lib/i18n").translations["pt-BR"]) => getTranslation(language, key)

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white transition-colors duration-300" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Celso Albuquerque</h3>
            <p className="text-gray-300">{t("footerDescription")}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <nav aria-label="Links do rodapé">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors focus-visible:outline-white"
                  >
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="text-gray-300 hover:text-white transition-colors focus-visible:outline-white"
                  >
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-gray-300 hover:text-white transition-colors focus-visible:outline-white"
                  >
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("connect")}</h3>
            <div className="flex space-x-4" role="list" aria-label="Redes sociais">
              <Link
                href="https://github.com/Celsocag"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors focus-visible:outline-white"
                aria-label="GitHub"
                role="listitem"
              >
                <Github className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/celso-gon%C3%A7alves/"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors focus-visible:outline-white"
                aria-label="LinkedIn"
                role="listitem"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link
                href="mailto:celsoalbugo@gmail.com"
                className="text-gray-300 hover:text-white transition-colors focus-visible:outline-white"
                aria-label="Email"
                role="listitem"
              >
                <Mail className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-300">© 2025 Celso Albuquerque. {t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  )
}
