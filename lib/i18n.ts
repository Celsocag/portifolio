export const languages = {
  "pt-BR": "Português",
  en: "English",
} as const

export type Language = keyof typeof languages

export const translations = {
  "pt-BR": {
    // Navigation
    home: "Início",
    contact: "Contato",

    // Hero Section
    heroTitle: "Olá, eu sou",
    heroDescription:
      "Um desenvolvedor frontend apaixonado por criar experiências web bonitas, funcionais e intuitivas para o usuário.",
    viewMyWork: "Ver Meu Trabalho",
    getInTouch: "Entre em Contato",

    // About Section
    aboutTitle: "Sobre Mim",
    aboutDescription:
      "Sou desenvolvedor front-end com 4 anos de experiência na construção de aplicações web usando diversas tecnologias. Comprometido com uma arquitetura de código limpa e escalável, focando em soluções simples e eficientes.",
    cleanCode: "Código Limpo",
    cleanCodeDesc: "Escrevendo código sustentável, escalável e eficiente.",
    uiuxDesign: "Design UI/UX",
    uiuxDesignDesc: "Criando interfaces de usuário bonitas e intuitivas.",
    responsive: "Responsivo",
    responsiveDesc: "Construindo aplicações que funcionam em todos os dispositivos.",
    performance: "Performance",
    performanceDesc: "Otimizando para velocidade e experiência do usuário.",

    // Skills Section
    skillsTitle: "Habilidades & Tecnologias",
    skillsDescription: "Tecnologias com as quais trabalho diariamente",

    // Projects Section
    projectsTitle: "Projetos em Destaque",
    projectsDescription: "Alguns dos meus trabalhos recentes",
    recipeApp: "Receitas IA",
    recipeAppDesc:
      "Um aplicativo simples e interativo que utiliza inteligência artificial para criar receitas com base nos ingredientes que você já tem em casa. Basta adicionar os itens à sua lista e o app gera uma receita personalizada usando IA via Hugging Face.",
    formsTitle: "Suíte de Formulários Interativos",
    formsDesc:
      "Coleção abrangente de formulários com validação, múltiplos tipos de entrada e design responsivo. Inclui formulários de contato, pesquisa e registro.",
    angularFullstack: "Angular Fullstack",
    angularFullstackDesc:
      "Desenvolvendo uma aplicação Angular fullstack do zero(Em andamento...)",
    code: "Código",
    demo: "Demo",

    // Contact Section
    contactTitle: "Vamos Trabalhar Juntos",
    contactDescription:
      "Estou sempre interessado em novas oportunidades e projetos empolgantes. Sinta-se à vontade para entrar em contato através de qualquer um dos canais abaixo.",
    email: "Email",
    phone: "Whatsapp",
    linkedin: "LinkedIn",
    connectWithMe: "Conecte-se comigo",
    github: "GitHub",
    viewMyCode: "Ver meu código",
    responseTime: "Normalmente respondo em até 24 horas. Ansioso para ouvir de você!",

    // Footer
    footerDescription: "Desenvolvedor Frontend apaixonado por criar experiências web bonitas e funcionais.",
    quickLinks: "Links Rápidos",
    projects: "Projetos",
    connect: "Conectar",
    allRightsReserved: "Todos os direitos reservados.",

    // Accessibility
    toggleDarkMode: "Alternar modo escuro",
    toggleLanguage: "Alternar idioma",
    mainNavigation: "Navegação principal",
    skipToContent: "Pular para o conteúdo",

    // Meta
    metaDescription:
      "Portfólio de Celso Albuquerque, um desenvolvedor frontend apaixonado especializado em React, Next.js e tecnologias web modernas.",
    metaKeywords: "desenvolvedor frontend, React, Next.js, JavaScript, TypeScript, desenvolvimento web",
  },
  en: {
    // Navigation
    home: "Home",
    contact: "Contact",

    // Hero Section
    heroTitle: "Hi, I'm",
    heroDescription:
      "A passionate frontend developer who loves creating beautiful, functional, and user-friendly web experiences.",
    viewMyWork: "View My Work",
    getInTouch: "Get In Touch",

    // About Section
    aboutTitle: "About Me",
    aboutDescription:
      "I am a front-end developer with 4 years of experience building web applications using various technologies. Committed to clean and scalable code architecture, focusing on simple and efficient solutions.",
    cleanCode: "Clean Code",
    cleanCodeDesc: "Writing maintainable, scalable, and efficient code.",
    uiuxDesign: "UI/UX Design",
    uiuxDesignDesc: "Creating beautiful and intuitive user interfaces.",
    responsive: "Responsive",
    responsiveDesc: "Building applications that work on all devices.",
    performance: "Performance",
    performanceDesc: "Optimizing for speed and user experience.",

    // Skills Section
    skillsTitle: "Skills & Technologies",
    skillsDescription: "Technologies I work with on a daily basis",

    // Projects Section
    projectsTitle: "Featured Projects",
    projectsDescription: "Some of my recent work",
    recipeApp: "AI Recipes",
    recipeAppDesc:
      "A simple and interactive app that uses artificial intelligence to create recipes based on the ingredients you already have at home. Just add the items to your list, and the app generates a personalized recipe using AI via Hugging Face.",
    formsTitle: "Interactive Form Suite",
    formsDesc:
      "Comprehensive form collection with validation, multiple input types, and responsive design. Includes contact, survey, and registration forms.",
    angularFullstack: "Angular fullstack",
    angularFullstackDesc:
      "Angular fullstack app from the start(WIP)",
    code: "Code",
    demo: "Demo",

    // Contact Section
    contactTitle: "Let's Work Together",
    contactDescription:
      "I'm always interested in new opportunities and exciting projects. Feel free to reach out through any of the channels below.",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    connectWithMe: "Connect with me",
    github: "GitHub",
    viewMyCode: "View my code",
    responseTime: "I typically respond within 24 hours. Looking forward to hearing from you!",

    // Footer
    footerDescription: "Frontend Developer passionate about creating beautiful and functional web experiences.",
    quickLinks: "Quick Links",
    projects: "Projects",
    connect: "Connect",
    allRightsReserved: "All rights reserved.",

    // Accessibility
    toggleDarkMode: "Toggle dark mode",
    toggleLanguage: "Toggle language",
    mainNavigation: "Main navigation",
    skipToContent: "Skip to content",

    // Meta
    metaDescription:
      "Portfolio of Celso Albuquerque, a passionate frontend developer specializing in React, Next.js, and modern web technologies.",
    metaKeywords: "frontend developer, React, Next.js, JavaScript, TypeScript, web development",
  },
}

export function getTranslation(language: Language, key: keyof (typeof translations)["pt-BR"]) {
  return translations[language][key] || translations["pt-BR"][key]
}
