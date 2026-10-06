<script setup lang="ts">
import type { Project } from '@/types/project'

// Define props with strict typing
defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-500 transition-all duration-300 flex flex-col">
    <!-- Project Image -->
    <div class="h-48 overflow-hidden bg-slate-800">
      <img 
        :src="project.imageUrl" 
        :alt="project.title" 
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-xl font-bold text-slate-100 mb-2">{{ project.title }}</h3>
      <p class="text-slate-400 text-sm mb-4 flex-grow">{{ project.description }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="tag in project.tags" 
          :key="tag" 
          class="px-2.5 py-1 bg-sky-500/10 text-sky-400 text-xs font-medium rounded-md border border-sky-500/20"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex items-center gap-4 pt-4 border-t border-slate-800">
        <a 
          v-if="project.liveUrl" 
          :href="project.liveUrl" 
          target="_blank" 
          class="text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
        >
          Live Demo &rarr;
        </a>
        <a 
          v-if="project.githubUrl" 
          :href="project.githubUrl" 
          target="_blank" 
          class="text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>