import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // State
  const isDark = ref<boolean>(true)

  // Actions
  function toggleTheme() {
    isDark.value = !isDark.value
    // Update root HTML class for Tailwind dark mode
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return { isDark, toggleTheme }
})