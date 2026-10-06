<script setup lang="ts">
const coreSubjects = [
  'Data Structures & Algorithms',
  'Programming Fundamentals (C++)',
  'Computer Architecture & Organization',
  'Computer Networks & Protocols',
  'Embedded Systems & Hardware Integration'
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
    
    <!-- Header -->
    <div class="space-y-4">
      <h1 class="text-4xl font-extrabold text-slate-100 tracking-tight">
        Education & <span class="text-sky-400">Academic Background</span>
      </h1>
      <p class="text-slate-400 text-lg">
        Strong foundational engineering background coupled with rigorous computer science fundamentals.
      </p>
    </div>

    <!-- University Card -->
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden space-y-6">
      <div class="absolute top-0 right-0 w-40 h-40 bg-sky-500/5 rounded-full blur-3xl"></div>
      
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 relative z-10">
        <div>
          <span class="text-xs font-semibold text-sky-400 uppercase tracking-wider">Menoufia University</span>
          <h2 class="text-2xl font-bold text-slate-100 mt-1">Bachelor's Degree in Electronic Engineering</h2>
        </div>
        <span class="px-4 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-sky-400 text-xs font-semibold">
          Class of 2024
        </span>
      </div>

      <p class="text-slate-300 text-sm leading-relaxed relative z-10">
        My academic journey provided me with a deep, low-level understanding of how hardware communicates with software, giving me a unique edge in designing highly efficient, optimized backend systems and real-time network architectures.
      </p>

      <!-- Core Studies / Subjects -->
      <div class="pt-4 border-t border-slate-800 relative z-10 space-y-3">
        <h3 class="text-sm font-bold text-slate-200 uppercase tracking-wider">Core Academic Curriculum & Foundations</h3>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="subject in coreSubjects" 
            :key="subject"
            class="px-3 py-1.5 bg-slate-950 text-slate-300 text-xs font-medium rounded-xl border border-slate-800"
          >
            {{ subject }}
          </span>
        </div>
      </div>
    </div>

  </div>
</template>