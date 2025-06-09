"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code, Palette, Smartphone, Zap, Mail, Phone, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/contexts/language-context"
import { getTranslation } from "@/lib/i18n"
import React from "react"

export default function Home() {
  const { language } = useLanguage()
  const t = (key: keyof typeof import("@/lib/i18n").translations["pt-BR"]) => getTranslation(language, key)

  const skills = [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Node.js",
    "Microsoft SQL Server",
    "Git",
    "Figma",
    "Responsive Design",
  ]

  const projects = [
    {
      title: t("recipeApp"),
      description: t("recipeAppDesc"),
      image: "/recipeApp.png?height=200&width=300",
      tech: ["React.js", "Vite", "@huggingface/inference", "React Markdown"],
      github: "https://github.com/Celsocag/recipe-app",
      demo: "",
    },
    {
      title: t("formsTitle"),
      description: t("formsDesc"),
      image: "/forms.png?height=200&width=300",
      tech: ["React", "TypeScript", "Form Validation"],
      demo: "/forms",
    },
    {
      title: t("angularFullstack"),
      description: t("angularFullstackDesc"),
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Node.js", "Angular", "MongoDb"],
      github: "https://github.com/Celsocag/angular_fullstack",
      demo:""
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                {t("heroTitle")} <span className="text-blue-600 dark:text-blue-400">Celso Albuquerque</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                {t("heroDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="#projects">{t("viewMyWork")}</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <Link href="#contact">{t("getInTouch")}</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/user.jpg?height=400&width=400"
                alt="Celso Albuquerque"
                width={400}
                height={400}
                className="rounded-full shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            >
              {t("aboutTitle")}
            </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            {t("aboutDescription").split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <Code
                  className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 transition-colors duration-300"
                  aria-hidden="true"
                />
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  {t("cleanCode")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{t("cleanCodeDesc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <Palette
                  className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 transition-colors duration-300"
                  aria-hidden="true"
                />
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  {t("uiuxDesign")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{t("uiuxDesignDesc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <Smartphone
                  className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 transition-colors duration-300"
                  aria-hidden="true"
                />
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  {t("responsive")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{t("responsiveDesc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <Zap
                  className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 transition-colors duration-300"
                  aria-hidden="true"
                />
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  {t("performance")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {t("performanceDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="skills-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            >
              {t("skillsTitle")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              {t("skillsDescription")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4" role="list" aria-label="Lista de tecnologias">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-lg py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                role="listitem"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="projects-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            >
              {t("projectsTitle")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              {t("projectsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <div className="aspect-video relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Screenshot do projeto ${project.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className="flex flex-wrap gap-2 mb-4"
                    role="list"
                    aria-label={`Tecnologias usadas no projeto ${project.title}`}
                  >
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                        role="listitem"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github ?
                      <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                      <Link href={project.github} aria-label={`Ver código do projeto ${project.title}`}>
                        <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                        {t("code")}
                      </Link>
                      </Button>
                      :
                      null
                    } 
                    
                    {project.demo?
                      <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Link href={project.demo} aria-label={`Ver demonstração do projeto ${project.title}`}>
                          <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                          {t("demo")}
                        </Link>
                      </Button>
                    :
                    null
                    }
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-900 dark:bg-gray-800 text-white transition-colors duration-300"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">
              {t("contactTitle")}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t("contactDescription")}</p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            role="list"
            aria-label="Métodos de contato"
          >
            {/* Email */}
           <a
            href="mailto:celsoalbugo@gmail.com"
            className="group bg-gray-800 dark:bg-gray-700 p-6 rounded-lg border border-gray-700 dark:border-gray-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 focus-visible:outline-blue-500"
            role="listitem"
            aria-label="Enviar email para celsoalbugo@gmail.com"
          >
            <div className="text-center">
              <Mail
                className="h-8 w-8 text-blue-400 mx-auto mb-4 group-hover:text-blue-300 transition-colors"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold mb-2">{t("email")}</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors break-words max-w-xs mx-auto">celsoalbugo@gmail.com</p>
            </div>
          </a>


            {/* Phone */}
            <a
              href="https://wa.me/5511978283108"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 dark:bg-gray-700 p-6 rounded-lg border border-gray-700 dark:border-gray-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 focus-visible:outline-green-500"
              role="listitem"
              aria-label="Ligar para +55 11 978283108"
            >
              <div className="text-center">
                <Phone
                  className="h-8 w-8 text-green-400 mx-auto mb-4 group-hover:text-green-300 transition-colors"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold mb-2">{t("phone")}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">+55 11 978283108</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/celso-gonçalves/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 dark:bg-gray-700 p-6 rounded-lg border border-gray-700 dark:border-gray-600 hover:border-blue-600 transition-all duration-300 hover:transform hover:scale-105 focus-visible:outline-blue-600"
              role="listitem"
              aria-label="Conectar no LinkedIn (abre em nova aba)"
            >
              <div className="text-center">
                <Linkedin
                  className="h-8 w-8 text-blue-600 mx-auto mb-4 group-hover:text-blue-500 transition-colors"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold mb-2">{t("linkedin")}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{t("connectWithMe")}</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Celsocag"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 dark:bg-gray-700 p-6 rounded-lg border border-gray-700 dark:border-gray-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 focus-visible:outline-purple-500"
              role="listitem"
              aria-label="Ver perfil no GitHub (abre em nova aba)"
            >
              <div className="text-center">
                <Github
                  className="h-8 w-8 text-purple-400 mx-auto mb-4 group-hover:text-purple-300 transition-colors"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold mb-2">{t("github")}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{t("viewMyCode")}</p>
              </div>
            </a>
          </div>

       
        </div>
      </section>
    </>
  )
}
