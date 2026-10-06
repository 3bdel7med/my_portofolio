<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Twitter', url: 'https://twitter.com' }
]
</script>

<template>
  <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      <!-- Copyright -->
      <p className="text-sm text-slate-400">
        &copy; {{ currentYear }} Full-Stack Software Engineer. All rights reserved.
      </p>

      <!-- Social Links -->
      <div className="flex items-center gap-6">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
        >
          {{ social.name }}
        </a>
      </div>

    </div>
  </footer>
</template>