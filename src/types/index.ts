// Portfolio data interfaces
export interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  lastUpdated: string // Date in YYYY-MM-DD format
  pinned?: boolean // Add pinned property
}

export interface PaginatedProjects {
  items: Project[]
  currentPage: number
  totalPages: number
  pageSize: number
  totalItems: number
}

export interface Skill {
  name: string
  icon?: string // Optional icon property
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

export interface BlogPost {
  title: string
  date: string
  summary: string
  url: string
}

export interface PortfolioData {
  name: string
  title: string
  bio: string
  aboutDetails: string[]
  email: string
  github: string
  linkedin: string
  skills: SkillCategory[]
  projects: Project[]
  experience: Experience[]
  blog: BlogPost[]
} 