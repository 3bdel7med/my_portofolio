<script setup lang="ts">
import { ref } from 'vue'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories = ref<SkillCategory[]>([
  { title: 'Frontend Development', skills: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'Pinia', 'HTML5/CSS3'] },
  { title: 'Backend & APIs', skills: ['Laravel', 'PHP', 'FastAPI', 'Python', 'RESTful APIs', 'WebSockets / Reverb'] },
  { title: 'AI & Automation', skills: ['Gemini API', 'RAG Architectures', 'n8n Workflows', 'Vector Databases (Qdrant)'] },
  { title: 'DevOps & Tools', skills: ['Docker', 'WSL2 / Ubuntu', 'Git & GitHub', 'Nginx', 'MySQL', 'Linux'] }
])

const experience = [
  {
    role: 'Full-Stack Software Engineer',
    place: 'Freelance / Self-Employed',
    period: 'Aug 2026 – Present',
    text: 'Designed and deployed scalable full-stack applications using Laravel, Vue.js and Docker for cross-border clients, and integrated LLMs with custom prompt workflows to automate support and operations.'
  },
  {
    role: 'PHP Developer',
    place: 'Upwork (Freelance)',
    period: 'Jul 2023 – Mar 2024',
    text: 'Built secure RESTful APIs and optimized complex MySQL queries with Redis caching strategies to improve response times.'
  },
  {
    role: 'PHP Developer Trainee',
    place: 'Information Technology Institute (ITI)',
    period: 'Aug 2022 – Sep 2022',
    text: 'Developed backend components adhering to MVC architectural patterns and clean code standards.'
  }
]
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <!-- Hero -->
      <div class="mb-16 space-y-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          About <span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Me</span>
        </h1>
        <p class="max-w-3xl text-lg leading-relaxed text-slate-400">
          I’m a Full-Stack Software Engineer specializing in building robust web applications, high-performance user interfaces, and intelligent automation systems.
        </p>
      </div>

      <!-- Bio -->
      <div class="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 md:col-span-2">
          <h2 class="text-2xl font-bold text-slate-100">Engineering with Purpose</h2>
          <p class="leading-relaxed text-slate-300">
            With a strong foundation in backend development using Laravel and modern frontend architecture using Vue.js and TypeScript, I bridge the gap between clean, scalable server-side code and lightning-fast user experiences.
          </p>
          <p class="leading-relaxed text-slate-300">
            Beyond standard web development, I am deeply passionate about integrating AI models—such as the Gemini API and Retrieval-Augmented Generation (RAG) architectures—into production platforms to create smarter, data-driven applications.
          </p>
        </div>

        <div class="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <div>
            <h3 class="mb-4 text-xl font-bold text-slate-100">Fast Facts</h3>
            <ul class="space-y-3 text-sm text-slate-300">
              <li class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-slate-400">Location</span><span class="font-medium">Cairo, Egypt</span>
              </li>
              <li class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-slate-400">Availability</span><span class="font-medium text-emerald-400">On-site / Hybrid / Remote</span>
              </li>
              <li class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-slate-400">Core Stack</span><span class="font-medium text-sky-400">Laravel &amp; Vue.js</span>
              </li>
              <li class="flex items-center justify-between">
                <span class="text-slate-400">Focus</span><span class="font-medium">Web Apps &amp; AI</span>
              </li>
            </ul>
          </div>
          <router-link to="/contact" class="w-full rounded-xl bg-sky-500 px-4 py-3 text-center font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-400">
            Let's Talk
          </router-link>
        </div>
      </div>

      <!-- Experience timeline -->
      <div class="mb-20 space-y-8">
        <h2 class="text-3xl font-extrabold text-slate-100">Experience</h2>
        <ol class="relative space-y-8 border-l border-slate-800 pl-8">
          <li v-for="job in experience" :key="job.role + job.period" class="relative">
            <span class="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-slate-950 bg-sky-400"></span>
            <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-sky-500/40">
              <div class="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 class="text-lg font-bold text-slate-100">{{ job.role }}</h3>
                  <p class="text-sm font-medium text-sky-400">{{ job.place }}</p>
                </div>
                <span class="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1 text-xs text-slate-400">{{ job.period }}</span>
              </div>
              <p class="mt-3 text-sm leading-relaxed text-slate-400">{{ job.text }}</p>
            </div>
          </li>
        </ol>
      </div>

      <!-- Skills -->
      <div class="space-y-8">
        <h2 class="text-3xl font-extrabold text-slate-100">Skills &amp; Expertise</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div v-for="category in skillCategories" :key="category.title" class="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-sky-500/50">
            <h3 class="mb-4 text-lg font-bold text-sky-400">{{ category.title }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in category.skills" :key="skill" class="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
