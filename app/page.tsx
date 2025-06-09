"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Zap,
  Mail,
  Phone,
  Linkedin,
  Calendar,
  Briefcase,
} from "lucide-react"
import { useLanguage } from "@/lib/contexts/language-context"
import { getTranslation } from "@/lib/i18n"
import React from "react"

export default function Home() {
  const { language } = useLanguage()
  const t = (key: keyof (typeof import("@/lib/i18n").translations)["pt-BR"]) => getTranslation(language, key)

  const skills = [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Gulp",
    "Bootstrap",
    "Sass",
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
      demo: "",
    },
    {
      title: t("dashboardTitle"),
      description: t("dashboardDesc"),
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "Next.js", "Charts.js"],
      github: "",
      demo: "/dashboard",
    },
  ]

  const experiences = {
    "pt-BR": [
      {
        company: "Exclusiva Sexshop",
        title: "Desenvolvedor Frontend",
        period: "Novembro 2020 - Novembro 2021",
        description: [
          "Desenvolvi e mantive a plataforma de e-commerce em Angular",
          "Implementei princípios de design responsivo,",
          "Colaborei com designers UX/UI para criar interfaces intuitivas e experiências de usuário fluidas",
          "Pesquisei e implementei soluções tecnológicas, incluindo o uso de pacotes externos e estratégias para otimização de desempenho em dispositivos móveis.",
          "Realizei análises de performance com o Google Lighthouse e implementei melhorias para aumentar as pontuações de carregamento, acessibilidade e boas práticas.",
        ],
        logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEudSLDl1ccow/company-logo_200_200/company-logo_200_200/0/1631312273160?e=1755129600&v=beta&t=O30S9GIyEQyHE4LCHWsb2K2xfwJe7LZwzarFoTmAZNo",
      },
      {
        company: "Think4",
        title: "Desenvolvedor Frontend",
        period: "Novembro 2021 - Fevereiro 2025",
        description: [
          "Desenvolvi sites, hotsites e campanhas digitais para grandes clientes.",
          "Refatorei sistemas front-end legados, modernizando interfaces e melhorando a experiência do usuário.",
          "Implementei interfaces de usuário seguindo boas práticas como BEM, design responsivo e código limpo.",
          "Realizei manipulação de bancos de dados, incluindo criação, alteração e consultas em tabelas para o desenvolvimento de soluções.",
          "Apoiei desenvolvedores júnior na resolução de problemas técnicos, revisão de código e boas práticas de desenvolvimento.",
        ],
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHovPVPTiORFA/company-logo_200_200/company-logo_200_200/0/1721908604071/think4_logo?e=1755129600&v=beta&t=MJR4sTEOSTgPx3kqGSRwmV0qJuDom9fS5kZWlYQl7tQ",
      },
    ],
    en: [
      {
        company: "Exclusiva Sexshop",
        title: "Frontend Developer",
        period: "November 2020 – November 2021",
        description: [
          "Developed and maintained the e-commerce platform using Angular.",
          "Implemented responsive design principles to ensure cross-device usability.",
          "Collaborated with UX/UI designers to create intuitive interfaces and smooth user experiences.",
          "Researched and implemented technical solutions, including external packages and performance optimization strategies for mobile devices.",
          "Performed performance audits using Google Lighthouse and implemented improvements to increase scores in loading speed, accessibility, and best practices.",
        ],
        logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEudSLDl1ccow/company-logo_200_200/company-logo_200_200/0/1631312273160?e=1755129600&v=beta&t=O30S9GIyEQyHE4LCHWsb2K2xfwJe7LZwzarFoTmAZNo",
      },
      {
        company: "Think4",
        title: "Frontend Developer",
        period: "November 2021 – February 2025",
        description: [
          "Developed websites, hotsites, and digital campaigns for high-profile clients.",
          "Refactored legacy front-end systems, modernizing interfaces and improving user experience.",
          "Implemented user interfaces following best practices such as BEM, responsive design, and clean code.",
          "Handled database tasks, including creating, modifying, and querying tables to support solution development.",
          "Supported junior developers with technical problem-solving, code reviews, and guidance on best practices.",
        ],
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHovPVPTiORFA/company-logo_200_200/company-logo_200_200/0/1721908604071/think4_logo?e=1755129600&v=beta&t=MJR4sTEOSTgPx3kqGSRwmV0qJuDom9fS5kZWlYQl7tQ",
      },
    ],
  }
  // Seleciona as experiências com base no idioma atual
  const currentExperiences = experiences[language] || experiences["en"]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 transition-colors duration-300 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold text-gray-900 transition-colors duration-300 dark:text-white md:text-6xl">
                {t("heroTitle")} <span className="text-blue-600 dark:text-blue-400">Celso Albuquerque</span>
              </h1>
              <p className="mb-8 text-xl text-gray-600 transition-colors duration-300 dark:text-gray-300">
                {t("heroDescription")}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="#projects">{t("viewMyWork")}</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-gray-300 text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
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
        className="bg-white py-20 transition-colors duration-300 dark:bg-gray-900"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2
              id="about-heading"
              className="mb-4 text-3xl font-bold text-gray-900 transition-colors duration-300 dark:text-white md:text-4xl"
            >
              {t("aboutTitle")}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 transition-colors duration-300 dark:text-gray-300">
              {t("aboutDescription")
                .split("\n")
                .map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-gray-200 bg-white text-center transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <Code
                  className="mx-auto mb-4 h-12 w-12 text-blue-600 transition-colors duration-300 dark:text-blue-400"
                  aria-hidden="true"
                />
                <CardTitle className="text-gray-900 transition-colors duration-300 dark:text-white">
                  {t("cleanCode")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">{t("cleanCodeDesc")}</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white text-center transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <Palette
                  className="mx-auto mb-4 h-12 w-12 text-blue-600 transition-colors duration-300 dark:text-blue-400"
                  aria-hidden="true"
                />
                <CardTitle className="text-gray-900 transition-colors duration-300 dark:text-white">
                  {t("uiuxDesign")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">{t("uiuxDesignDesc")}</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white text-center transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <Smartphone
                  className="mx-auto mb-4 h-12 w-12 text-blue-600 transition-colors duration-300 dark:text-blue-400"
                  aria-hidden="true"
                />
                <CardTitle className="text-gray-900 transition-colors duration-300 dark:text-white">
                  {t("responsive")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">{t("responsiveDesc")}</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white text-center transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <Zap
                  className="mx-auto mb-4 h-12 w-12 text-blue-600 transition-colors duration-300 dark:text-blue-400"
                  aria-hidden="true"
                />
                <CardTitle className="text-gray-900 transition-colors duration-300 dark:text-white">
                  {t("performance")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">
                  {t("performanceDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Professional Experience Section */}
      <section
        id="experience"
        className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-800"
        aria-labelledby="experience-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2
              id="experience-heading"
              className="mb-4 text-3xl font-bold text-gray-900 transition-colors duration-300 dark:text-white md:text-4xl"
            >
              {t("experienceTitle")}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 transition-colors duration-300 dark:text-gray-300">
              {t("experienceDescription")}
            </p>
          </div>

          <div className="space-y-12">
            {currentExperiences.map((experience, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white shadow-md transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="flex-shrink-0">
                      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
                        <Image
                          src={experience.logo || "/placeholder.svg"}
                          alt={`${experience.company} logo`}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-gray-600 transition-colors duration-300 dark:text-gray-300">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span className="text-sm">{experience.period}</span>
                        </div>
                      </div>
                      <div className="mb-4 mt-1 flex items-center">
                        <Briefcase className="mr-1 h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-lg font-medium text-blue-600 transition-colors duration-300 dark:text-blue-400">
                          {experience.company}
                        </span>
                      </div>
                      <ul className="list-inside list-disc space-y-2 text-gray-700 transition-colors duration-300 dark:text-gray-300">
                        {experience.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-800"
        aria-labelledby="skills-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2
              id="skills-heading"
              className="mb-4 text-3xl font-bold text-gray-900 transition-colors duration-300 dark:text-white md:text-4xl"
            >
              {t("skillsTitle")}
            </h2>
            <p className="text-lg text-gray-600 transition-colors duration-300 dark:text-gray-300">
              {t("skillsDescription")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4" role="list" aria-label="Lista de tecnologias">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-gray-200 px-4 py-2 text-lg text-gray-900 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-100"
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
        className="bg-white py-20 transition-colors duration-300 dark:bg-gray-900"
        aria-labelledby="projects-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2
              id="projects-heading"
              className="mb-4 text-3xl font-bold text-gray-900 transition-colors duration-300 dark:text-white md:text-4xl"
            >
              {t("projectsTitle")}
            </h2>
            <p className="text-lg text-gray-600 transition-colors duration-300 dark:text-gray-300">
              {t("projectsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-gray-200 bg-white transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="relative aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Screenshot do projeto ${project.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-900 transition-colors duration-300 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 transition-colors duration-300 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className="mb-4 flex flex-wrap gap-2"
                    role="list"
                    aria-label={`Tecnologias usadas no projeto ${project.title}`}
                  >
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300"
                        role="listitem"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github ? (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <Link href={project.github} aria-label={`Ver código do projeto ${project.title}`}>
                          <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                          {t("code")}
                        </Link>
                      </Button>
                    ) : null}

                    {project.demo ? (
                      <Button size="sm" asChild className="bg-blue-600 text-white hover:bg-blue-700">
                        <Link href={project.demo} aria-label={`Ver demonstração do projeto ${project.title}`}>
                          <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                          {t("demo")}
                        </Link>
                      </Button>
                    ) : null}
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
        className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
              {t("contactTitle")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">{t("contactDescription")}</p>
          </div>

          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            role="list"
            aria-label="Métodos de contato"
          >
            {/* Email */}
            <a
              href="mailto:celsoalbugo@gmail.com"
              className="group bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 focus-visible:outline-blue-500 shadow-sm hover:shadow-md"
              role="listitem"
              aria-label="Enviar email para celsoalbugo@gmail.com"
            >
              <div className="text-center">
                <Mail
                  className="mx-auto mb-4 h-8 w-8 text-blue-400 transition-colors group-hover:text-blue-300"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">{t("email")}</h3>
                <p className="mx-auto max-w-xs break-words text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  celsoalbugo@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="https://wa.me/5511978283108"
              target="_blank"
              rel="noopener noreferrer"
                 className="group bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105 focus-visible:outline-green-500 shadow-sm hover:shadow-md"
              role="listitem"
              aria-label="Ligar para +55 11 978283108"
            >
              <div className="text-center">
                <Phone
                  className="mx-auto mb-4 h-8 w-8 text-green-400 transition-colors group-hover:text-green-300"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">{t("phone")}</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">+55 11 978283108</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/celso-gonçalves/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 focus-visible:outline-blue-600 shadow-sm hover:shadow-md"
              role="listitem"
              aria-label="Conectar no LinkedIn (abre em nova aba)"
            >
              <div className="text-center">
                <Linkedin
                  className="mx-auto mb-4 h-8 w-8 text-blue-600 transition-colors group-hover:text-blue-500"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">{t("linkedin")}</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{t("connectWithMe")}</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Celsocag"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 focus-visible:outline-purple-500 shadow-sm hover:shadow-md"
              role="listitem"
              aria-label="Ver perfil no GitHub (abre em nova aba)"
            >
              <div className="text-center">
                <Github
                  className="mx-auto mb-4 h-8 w-8 text-purple-400 transition-colors group-hover:text-purple-300"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">{t("github")}</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{t("viewMyCode")}</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
