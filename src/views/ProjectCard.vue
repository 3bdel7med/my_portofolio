<script setup lang="ts">
import type { Project } from '@/types/project'
defineProps<{ project: Project }>()
</script>

<template>
  <article
    class="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10"
  >
    <!-- Cover -->
    <div :class="['relative h-40 bg-gradient-to-br', project.accent]">
      <div class="absolute inset-0 opacity-20 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
      <span v-if="project.period" class="absolute left-5 top-4 text-xs font-medium text-white/80">{{ project.period }}</span>
      <span class="absolute right-4 top-4 rounded-full bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
        {{ project.category }}
      </span>
      <span class="absolute bottom-4 left-5 text-5xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">{{ project.icon }}</span>
    </div>

    <!-- Body -->
    <div class="flex flex-1 flex-col gap-4 p-6">
      <div>
        <h3 class="text-xl font-bold text-slate-100">{{ project.title }}</h3>
        <p v-if="project.subtitle" class="mt-1 text-sm font-medium text-sky-400">{{ project.subtitle }}</p>
      </div>

      <p class="text-sm leading-relaxed text-slate-400">{{ project.description }}</p>

      <ul v-if="project.highlights?.length" class="space-y-1.5 text-sm text-slate-300">
        <li v-for="h in project.highlights" :key="h" class="flex gap-2">
          <span class="text-sky-400">▸</span><span>{{ h }}</span>
        </li>
      </ul>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-lg border border-slate-700/80 bg-slate-950 px-2.5 py-1 text-[11px] font-medium text-slate-300"
        >
          {{ tag }}
        </span>
      </div>

      <div class="mt-auto flex items-center gap-5 border-t border-slate-800 pt-4 text-sm font-semibold">
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="text-sky-400 transition-colors hover:text-sky-300">
          GitHub ↗
        </a>
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="text-slate-300 transition-colors hover:text-white">
          Live Demo ↗
        </a>
      </div>
    </div>
  </article>
</template>
