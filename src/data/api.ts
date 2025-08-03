import type { PortfolioData } from '../types'

// Portfolio data - customize this with your information
export const portfolioData: PortfolioData = {
  name: "Walter Chavarria",
  title: "Staff Engineer",
  bio: "Experienced Staff Engineer with over 9 years of software development experience, specializing in full-stack development, AI/ML technologies, and leading multi-team initiatives. Passionate about teaching and sharing knowledge with others.",
  aboutDetails: [
    "I am a proactive person who spends my free time reading about new technologies and creating demo examples. I really enjoy teaching and sharing my knowledge with others, complemented with activities like cycling and working out at the gym to clear my mind and stay healthy.",
    "Currently serving as Staff Engineer where I spearhead multi-year, multi-team product and platform initiatives. My expertise spans Ruby on Rails, Python, Natural Language Processing, Large Language Models, and Go programming. I'm a passionate Neovim user and Lua programmer, crafting efficient development environments and custom tools.",
    "With extensive experience across multiple companies, I've developed a strong foundation in front-end development and responsive web design. I'm currently exploring Web3 technologies including Solidity and Ethereum development. I hold certifications in Generative AI for Software Development and Team Software Engineering with AI."
  ],
  email: "wchavarria03@gmail.com",
  github: "https://github.com/wchavarria03",
  linkedin: "https://linkedin.com/in/wchavarria03",
  
  skills: [
    {
      title: 'Development Tools',
      skills: [
        { name: 'Neovim' },
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'tmux' },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Lua' },
        { name: 'Golang' },
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Ruby on Rails' },
      ],
    },
    {
      title: 'Frontend & Frameworks',
      skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Node.js' },
        { name: 'Material-UI' },
        { name: 'Redux.js' },
        { name: 'Bootstrap' },
      ],
    },
    {
      title: 'Web3 & Blockchain',
      skills: [
        { name: 'Solidity' },
        { name: 'Ethereum' },
        { name: 'Web3' },
      ],
    },
    {
      title: 'AI & ML',
      skills: [
        { name: 'Natural Language Processing' },
        { name: 'Large Language Models' },
        { name: 'Retrieval-Augmented Generation' },
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },
        { name: 'Git' },
        { name: 'Jira' },
        { name: 'Cypress' },
        { name: 'Docker' },
      ],
    }
  ],
  
  projects: [
    {
      title: "Personalized Dotfiles",
      description: "Advanced Neovim-centric development environment powered by custom Lua configurations. Features extensive plugin system, LSP integrations, and custom keymaps all written in Lua. Includes powerful shell scripts, git hooks, and productivity tools. The setup emphasizes modal editing efficiency with Neovim at its core, complemented by tmux for seamless terminal multiplexing.",
      technologies: ["Neovim", "Lua", "Shell", "Git", "Docker"],
      githubUrl: "https://github.com/wchavarria03/dotfiles",
      lastUpdated: "2025-07-21",
      pinned: true
    },
    {
      title: "AI Rules Engine",
      description: "Intelligent rules engine that leverages machine learning to dynamically adapt and optimize business rules. Includes pattern recognition, anomaly detection, and automated decision-making capabilities.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/wchavarria03/ai-rules-link",
      lastUpdated: "2025-06-30" // Jun 30, 2025, 1:19 PM CST
    },
    {
      title: "Kipu Banking Platform",
      description: "Modern banking platform with features for account management, transactions, and financial analytics. Implements secure authentication, real-time notifications, and comprehensive reporting tools.",
      technologies: ["Node.js", "React", "PostgreSQL", "Redis", "Docker"],
      githubUrl: "https://github.com/wchavarria03/kipu-bank",
      lastUpdated: "2025-06-15" // Jun 15, 2025, 11:21 PM CST
    },
    {
      title: "Liquidity Pool Smart Contract",
      description: "Implementation of a decentralized liquidity pool using smart contracts. Features automated market making (AMM), token swaps, and liquidity provision with reward mechanisms. Built with security and gas optimization in mind.",
      technologies: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "DeFi"],
      githubUrl: "https://github.com/wchavarria03/liquidity-pool",
      lastUpdated: "2025-07-07" // Jul 7, 2025, 9:45 AM CST
    },
    {
      title: "Bank Transaction OCR System",
      description: "Optical Character Recognition system specialized in processing bank statements and financial documents. Features high-accuracy text extraction, transaction categorization, and automated data entry.",
      technologies: ["Python", "OpenCV", "Tesseract", "Machine Learning", "REST API"],
      githubUrl: "https://github.com/wchavarria03/bank-transactions-ocr",
      lastUpdated: "2025-05-17" // May 17, 2025, 8:51 AM CST
    }
  ],
  
  experience: [
    {
      title: "Staff Engineer",
      company: "The Lifetime Value Co. (f.k.a. BeenVerified)",
      period: "January 2025 - Present",
      description: "Spearhead and deliver multi-year, multi-team product and platform initiatives, aligning technical strategy with business objectives. Leading AI/ML initiatives including NLP and Large Language Models."
    },
    {
      title: "Associate Director of Engineering",
      company: "The Lifetime Value Co. (f.k.a. BeenVerified)",
      period: "January 2023 - February 2025",
      description: "Led engineering teams and managed project direction, implementing strategies to reduce QA issues and improve development processes."
    },
    {
      title: "Senior Software Engineer",
      company: "The Lifetime Value Co. (f.k.a. BeenVerified)",
      period: "January 2020 - January 2023",
      description: "Developed and maintained web applications using modern JavaScript frameworks, focusing on responsive design and user experience."
    },
    {
      title: "Software Engineer and Manager",
      company: "BeenVerified.com",
      period: "August 2018 - January 2020",
      description: "Helped manage and advised frontend team members, implementing strategies to reduce QA issues and improve development processes."
    },
    {
      title: "Front-End Developer",
      company: "BeenVerified.com",
      period: "October 2017 - August 2018",
      description: "Developed static pages based on mockups using JS, CSS and HTML while working with mobile-first approach."
    },
    {
      title: "Software Engineer",
      company: "Avantica Technologies",
      period: "November 2014 - October 2017",
      description: "Three years of experience designing, developing and supporting corporate tools and web applications with passion for software development and ability to learn and adapt to new technologies."
    }
  ],
  blog: [
    {
      title: "The Rise of AI in Software Engineering",
      date: "October 26, 2024",
      summary: "Exploring how AI is transforming the landscape of software development, from code generation to automated testing.",
      url: "#"
    },
    {
      title: "A Deep Dive into Modern CSS",
      date: "September 15, 2024",
      summary: "A comprehensive look at the latest features in CSS, including container queries, cascade layers, and more.",
      url: "#"
    },
    {
      title: "Getting Started with Go for Web Development",
      date: "August 01, 2024",
      summary: "A beginner-friendly guide to building fast and efficient web applications with the Go programming language.",
      url: "#"
    }
  ]
} 