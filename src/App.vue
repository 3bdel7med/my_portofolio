<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
    <Navbar />
    
    <main className="flex-grow">
      <RouterView />
    </main>
    
    <Footer />
  </div>
</template>