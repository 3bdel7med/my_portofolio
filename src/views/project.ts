export interface Project {
  id: number
  title: string
  subtitle?: string
  description: string
  highlights?: string[]
  tags: string[]
  category: 'AI' | 'Platform' | 'Package' | 'API'
  period?: string
  featured?: boolean
  icon: string
  accent: string // full Tailwind gradient classes, e.g. 'from-sky-500 to-indigo-600'
  githubUrl?: string
  liveUrl?: string
}
