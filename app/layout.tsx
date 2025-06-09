import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/lib/contexts/theme-context"
import { LanguageProvider } from "@/lib/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Celso Albuquerque - Desenvolvedor Frontend",
  description:
    "Portfólio de Celso Albuquerque, um desenvolvedor frontend apaixonado por criar experiências web bonitas, funcionais e intuitivas para o usuário.",
  keywords: "desenvolvedor frontend, React, Next.js, JavaScript, TypeScript, desenvolvimento web, Angular, SQL Server",
  authors: [{ name: "Celso Albuquerque" }],
  creator: "Celso Albuquerque",
  publisher: "Celso Albuquerque",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    siteName: "Celso Albuquerque - Desenvolvedor Frontend",
    title: "Celso Albuquerque - Desenvolvedor Frontend",
    description:
      "Portfólio de Celso Albuquerque, um desenvolvedor frontend apaixonado por criar experiências web bonitas, funcionais e intuitivas para o usuário.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Celso Albuquerque - Desenvolvedor Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celso Albuquerque - Desenvolvedor Frontend",
    description:
      "Portfólio de Celso Albuquerque, um desenvolvedor frontend apaixonado por criar experiências web bonitas, funcionais e intuitivas para o usuário.",
    images: ["/og-image.jpg"],
  }
};

export const viewport = "width=device-width, initial-scale=1";

export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  { media: "(prefers-color-scheme: dark)", color: "#111827" },
];


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>

      </head>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
            >
              Pular para o conteúdo
            </a>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
              <Header />
              <main id="main-content">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
