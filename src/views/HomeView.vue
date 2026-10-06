<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from  '@/data/projects'

// Highlighted projects featured on the home page
const featuredProjects = projects.filter(p => p.featured)

const stats = [
  { value: '19', label: 'GitHub Repositories' },
  { value: String(projects.length), label: 'Projects Showcased' },
  { value: '2', label: 'Open-Source Packages' }
]

const services = [
  { icon: '⚙️', title: 'Backend & APIs', text: 'Scalable Laravel and FastAPI services, REST design, queues, caching and MySQL query optimization.' },
  { icon: '🧠', title: 'AI Integration', text: 'Gemini API, RAG pipelines and vector databases wired into production-grade platforms.' },
  { icon: '⚡', title: 'Real-Time Systems', text: 'WebSockets, Laravel Reverb and WebRTC for chat, calls and live dashboards.' }
]
</script>

<template>
  <div class="relative overflow-hidden pb-24">
    <!-- Background glow -->
    <div class="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"></div>
    <div class="pointer-events-none absolute top-60 -right-40 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-3xl"></div>

    <div class="relative space-y-28">
      <!-- Hero -->
      <section class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-14 px-4 pt-24 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <div class="max-w-2xl space-y-7">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            Open for On-site, Hybrid &amp; Remote roles
          </div>

          <h1 class="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-100 sm:text-6xl">
            Architecting High-Performance
            <span class="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">Web &amp; AI Systems</span>
          </h1>

          <p class="text-lg leading-relaxed text-slate-400">
            Hi, I'm <span class="font-semibold text-slate-200">Abdelhamed Fathy</span> — a Full-Stack Software Engineer. I specialize in crafting production-grade platforms with PHP (Laravel), Vue.js, and cutting-edge AI integrations like the Gemini API, RAG, and FastAPI.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
            <RouterLink to="/projects" class="rounded-xl bg-sky-500 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5 hover:bg-sky-400">
              Explore Projects
            </RouterLink>
            <RouterLink to="/contact" class="rounded-xl border border-slate-700 bg-slate-900/80 px-8 py-4 font-semibold text-slate-200 transition-all hover:-translate-y-0.5 hover:border-sky-500/50">
              Get In Touch
            </RouterLink>
            <RouterLink to="/cv" class="px-2 py-4 text-sm font-semibold text-slate-400 transition-colors hover:text-sky-400">View CV →</RouterLink>
          </div>
        </div>

        <!-- Code card -->
        <div class="w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-sky-500/5 backdrop-blur">
          <div class="flex items-center gap-2 border-b border-slate-800 bg-slate-950/60 px-4 py-3">
            <span class="h-3 w-3 rounded-full bg-rose-500/80"></span>
            <span class="h-3 w-3 rounded-full bg-amber-400/80"></span>
            <span class="h-3 w-3 rounded-full bg-emerald-500/80"></span>
            <span class="ml-3 text-xs text-slate-500">engineer.ts</span>
          </div>
          <pre class="overflow-x-auto p-6 text-left font-mono text-[13px] leading-7 text-slate-300"><code><span class="text-violet-400">const</span> <span class="text-sky-300">engineer</span> = {
  name: <span class="text-emerald-300">'Abdelhamed Fathy'</span>,
  location: <span class="text-emerald-300">'Cairo, Egypt'</span>,
  backend: [<span class="text-emerald-300">'Laravel'</span>, <span class="text-emerald-300">'FastAPI'</span>],
  frontend: [<span class="text-emerald-300">'Vue 3'</span>, <span class="text-emerald-300">'Inertia'</span>],
  ai: [<span class="text-emerald-300">'Gemini'</span>, <span class="text-emerald-300">'RAG'</span>],
  infra: [<span class="text-emerald-300">'Docker'</span>, <span class="text-emerald-300">'Redis'</span>],
  openToWork: <span class="text-amber-300">true</span>
}</code></pre>
        </div>
      </section>

      <!-- Stats -->
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div v-for="s in stats" :key="s.label" class="p-8 text-center">
            <p class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-4xl font-extrabold text-transparent">{{ s.value }}</p>
            <p class="mt-1 text-sm text-slate-400">{{ s.label }}</p>
          </div>
        </div>
      </section>

      <!-- What I do -->
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-extrabold tracking-tight text-slate-100">What I Do</h2>
          <p class="mt-2 text-slate-400">From database to dashboard — and the AI in between.</p>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div v-for="s in services" :key="s.title" class="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition-colors hover:border-sky-500/40">
            <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-2xl">{{ s.icon }}</div>
            <h3 class="mb-2 text-lg font-bold text-slate-100">{{ s.title }}</h3>
            <p class="text-sm leading-relaxed text-slate-400">{{ s.text }}</p>
          </div>
        </div>
      </section>

      <!-- Featured Projects -->
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 class="text-3xl font-extrabold tracking-tight text-slate-100">Featured Work</h2>
            <p class="mt-2 text-slate-400">A glimpse of automated tools and production architectures I’ve built.</p>
          </div>
          <RouterLink to="/projects" class="text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300">View All Projects &rarr;</RouterLink>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
        </div>
      </section>

      <!-- CTA -->
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-gradient-to-br from-sky-900/40 via-slate-900 to-violet-900/30 p-10 text-center sm:p-16">
          <div class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"></div>
          <h2 class="relative text-3xl font-extrabold text-slate-100 sm:text-4xl">Ready to build something exceptional?</h2>
          <p class="relative mx-auto mt-4 max-w-xl text-slate-300">
            Whether you need a robust full-stack web application or smart AI workflow automation, let's talk about how we can collaborate.
          </p>
          <RouterLink to="/contact" class="relative mt-8 inline-block rounded-xl bg-sky-500 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5 hover:bg-sky-400">
            Let's Talk
          </RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>
