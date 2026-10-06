<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from  '@/data/projects'

const selected = ref<string>('All')

const categories = computed(() => {
  const counts: Record<string, number> = {}
  projects.forEach(p => (counts[p.category] = (counts[p.category] || 0) + 1))
  return [{ name: 'All', count: projects.length }, ...Object.entries(counts).map(([name, count]) => ({ name, count }))]
})

const filtered = computed(() =>
  selected.value === 'All' ? projects : projects.filter(p => p.category === selected.value)
)
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl space-y-12 px-4 py-20 sm:px-6 lg:px-8">
      <div class="max-w-2xl space-y-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          All <span class="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p class="text-lg leading-relaxed text-slate-400">
          A comprehensive collection of production-grade platforms, full-stack applications, and open-source packages I have designed and engineered.
        </p>
      </div>

      <!-- Filter -->
      <div class="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-6">
        <button
          v-for="c in categories"
          :key="c.name"
          @click="selected = c.name"
          :class="[
            'rounded-xl px-4 py-2 text-xs font-semibold transition-all',
            selected === c.name
              ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20'
              : 'border border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600'
          ]"
        >
          {{ c.name }} <span class="ml-1 opacity-60">{{ c.count }}</span>
        </button>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="project in filtered" :key="project.id" :project="project" />
      </div>
    </div>
  </div>
</template>
