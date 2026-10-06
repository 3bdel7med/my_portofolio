<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import avatarImg from '@/assets/3bel7med.jfif' // Import your image

const themeStore = useThemeStore()
const isMobileMenuOpen = ref<boolean>(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  {name : 'my CV', path: '/cv'},
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- Brand Logo with Personal Avatar -->
      <RouterLink to="/" class="flex items-center gap-3 group">
        <div class="relative w-11 h-11 rounded-full overflow-hidden border-2 border-sky-500/50 group-hover:border-sky-400 transition-colors shadow-md shadow-sky-500/10">
          <img :src="avatarImg" alt="Abdelhamed Fathy" class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col">
          <span class="text-base font-bold text-slate-100 tracking-tight group-hover:text-sky-400 transition-colors">
            Abdelhamed Fathy
          </span>
          <span class="text-xs text-slate-400 font-medium">Software Engineer</span>
        </div>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <RouterLink 
          v-for="link in navLinks" 
          :key="link.path" 
          :to="link.path"
          class="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
          active-class="text-sky-400 font-semibold"
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <!-- Right Actions (Theme Toggle & Mobile Menu Button) -->
      <div class="flex items-center gap-4">
        <!-- Theme Toggle Button -->
        <button 
          @click="themeStore.toggleTheme"
          class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 transition-colors"
          aria-label="Toggle theme"
        >
          <span v-if="themeStore.isDark">☀️</span>
          <span v-else>🌙</span>
        </button>

        <!-- Mobile Menu Hamburger Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu Dropdown -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
      <RouterLink 
        v-for="link in navLinks" 
        :key="link.path" 
        :to="link.path"
        @click="isMobileMenuOpen = false"
        class="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-sky-400 transition-colors"
      >
        {{ link.name }}
      </RouterLink>
    </div>
  </header>
</template>