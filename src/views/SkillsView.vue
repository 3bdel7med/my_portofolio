<script setup lang="ts">
import { ref } from 'vue'

interface SkillGroup {
  category: string
  icon: string
  items: string[]
}

const skillGroups = ref<SkillGroup[]>([
  { category: 'Backend & Architecture', icon: '⚙️', items: ['PHP (Laravel)', 'Python (FastAPI)', 'RESTful API Design', 'Microservices', 'Event-Driven Architecture', 'Queue-Based Job Processing'] },
  { category: 'Frontend Development', icon: '🎨', items: ['Vue.js 3 (Composition API)', 'Inertia.js', 'Pinia', 'Blade', 'Tailwind CSS', 'JavaScript (ES6+)'] },
  { category: 'Real-Time & Performance', icon: '⚡', items: ['WebSockets (Laravel Reverb, Pusher)', 'WebRTC Signaling', 'Redis (Queues, Caching)', 'MySQL Query Optimization'] },
  { category: 'AI Integration', icon: '🧠', items: ['Google Gemini API', 'OpenAI APIs', 'LangChain', 'RAG Systems', 'Vector Databases (ChromaDB)', 'Speech Processing (Whisper)', 'scikit-learn'] },
  { category: 'DevOps & Tools', icon: '🛠️', items: ['Docker & Docker Compose', 'Git', 'GitHub Actions', 'Jenkins CI/CD', 'Linux (Ubuntu/WSL2)', 'Postman'] }
])
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl space-y-12 px-4 py-20 sm:px-6 lg:px-8">
      <div class="space-y-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          Technical <span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Skills</span>
        </h1>
        <p class="text-lg text-slate-400">A comprehensive overview of the tools, frameworks, and technologies I work with.</p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          v-for="group in skillGroups"
          :key="group.category"
          class="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5"
        >
          <div class="flex items-center gap-3 border-b border-slate-800 pb-4">
            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-xl">{{ group.icon }}</span>
            <h2 class="text-xl font-bold text-slate-100">{{ group.category }}</h2>
          </div>
          <div class="flex flex-wrap gap-2.5">
            <span v-for="item in group.items" :key="item" class="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-sky-500/40 hover:text-sky-300">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
