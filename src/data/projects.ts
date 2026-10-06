import type { Project } from '@/types/project'

const GH = 'https://github.com/3bdel7med'

export const projects: Project[] = [
  {
    id: 1,
    title: 'OptiQuery AI',
    subtitle: 'Automated Database Optimization & Telemetry Platform',
    description:
      'A self-built Laravel client package that intercepts slow SQL queries and automates EXPLAIN-plan analysis via Gemini AI to diagnose root causes and suggest actionable indexes.',
    highlights: [
      'FastAPI + ChromaDB microservice powering a RAG assistant for root-cause analysis',
      'Vue.js 3 + Inertia dashboard streaming live metrics through Laravel Reverb',
      'AI-generated DDL index migrations'
    ],
    tags: ['Laravel', 'Vue.js 3', 'Inertia.js', 'FastAPI', 'Gemini AI', 'ChromaDB', 'Docker'],
    category: 'AI',
    period: 'Jul 2026 – Sep 2026',
    featured: true,
    icon: '⚡',
    accent: 'from-sky-500 to-indigo-600',
    imageUrl: '/public/images/optiquery.jfif',
    githubUrl: GH
  },
  {
    id: 2,
    title: 'Bazzario',
    subtitle: 'Multi-Vendor E-Commerce Platform',
    description:
      'A multi-role marketplace (Admin, Vendor, Customer) with isolated dashboards, strict role permissions, LLM-generated product descriptions and real-time chat.',
    highlights: [
      '3 isolated dashboards with separate auth guards',
      'Live messaging via Laravel Reverb + Redis presence channels',
      'LLM auto-reply microservice built with FastAPI and queues'
    ],
    tags: ['Laravel', 'Blade', 'FastAPI', 'Redis', 'Laravel Reverb', 'Docker'],
    category: 'Platform',
    period: 'May 2026 – Jun 2026',
    featured: true,
    icon: '🛒',
    imageUrl: '/public/images/bazarrio.jfif',
    accent: 'from-emerald-500 to-teal-600',
    githubUrl: GH
  },
  {
    id: 3,
    title: 'Nexus',
    subtitle: 'Real-Time Chat & AI Communication Platform',
    description:
      'An event-driven chat platform with 1-to-1 and group conversations, asynchronous voice messages via queues, WebRTC calls and Gemini AI auto-replies.',
    highlights: [
      'Low-latency WebSockets with Redis-backed queue workers',
      'WebRTC signaling for audio/video calls',
      'Media and AI processing offloaded to keep the UI responsive'
    ],
    tags: ['Laravel', 'WebSockets', 'WebRTC', 'Redis', 'Gemini AI'],
    category: 'Platform',
    period: 'Apr 2026 – Jun 2026',
    featured: true,
    icon: '💬',
    imageUrl: '/public/images/nexus.jfif',
    accent: 'from-violet-500 to-fuchsia-600',
    githubUrl: GH
  },
  {
    id: 4,
    title: 'Sentinel AI',
    subtitle: 'AI-Powered Laravel Exception Monitor',
    description:
      'An open-source Laravel package that captures application exceptions and uses Gemini AI to generate root-cause explanations and fixes in Arabic and English.',
    highlights: ['Zero-config Blade + Tailwind dashboard', 'Browse, filter and clear error logs'],
    tags: ['Laravel', 'Gemini AI', 'Blade', 'Tailwind CSS', 'Open Source'],
    category: 'Package',
    period: '2026',
    imageUrl: '/public/images/sential.jfif',
    icon: '🛡️',
    accent: 'from-amber-500 to-orange-600',
    githubUrl: GH
  },
  {
    id: 5,
    title: 'OptiQuery Laravel',
    subtitle: 'Slow Query Reporting Client',
    description:
      'A Laravel client package that asynchronously reports slow SQL queries with zero performance overhead on the host application.',
    highlights: ['Http::async() with a configurable threshold', 'Auto-captures EXPLAIN plans and table DDL', 'Built-in infinite-loop protection'],
    tags: ['Laravel', 'MySQL', 'Async HTTP', 'Open Source'],
    category: 'Package',
    period: '2026',
    imageUrl: '/public/images/optiquery.jfif',
    icon: '📦',
    accent: 'from-cyan-500 to-blue-600',
    githubUrl: GH
  },
  {
    id: 6,
    title: 'El-Shfaa Pharmacy',
    subtitle: 'E-Commerce REST API',
    description:
      'A full Laravel REST API backend for product listings, cart management and secure checkout, protected with Laravel Sanctum.',
    tags: ['Laravel', 'REST API', 'Laravel Sanctum', 'MySQL'],
    category: 'API',
    period: '2025',
    highlights: [
      'REST API with Sanctum authentication and role-based access control',
      'MySQL database with optimized queries and indexing',
      'Secure checkout process with validation and error handling'
    ],
    icon: '💊',
    imageUrl: '/public/images/el-sfaa.jfif',
    accent: 'from-rose-500 to-pink-600',
    githubUrl: GH
  },
  {
    id: 7,
    title: 'Smart Voting System',
    subtitle: 'Real-Time Secure Voting',
    description:
      'A secure real-time voting backend with live result updates over WebSockets and strict vote-integrity constraints.',
    tags: ['Laravel', 'Vue.js', 'Pinia', 'WebSockets'],
    category: 'Platform',
    icon: '🗳️',
    period: '2024',
    highlights: [
      'Real-time vote updates via WebSockets',
      'Strict vote integrity with unique voter constraints',
      'Admin dashboard for managing elections and results'
    ],
    imageUrl: '/public/images/svs.jfif',
    accent: 'from-indigo-500 to-purple-600',
    githubUrl: 'https://github.com/3bdel7med/Voting_system'
  }
]
