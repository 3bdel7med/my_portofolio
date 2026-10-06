<script setup lang="ts">
import { ref, reactive } from 'vue'

// Define a type for form input data
interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Reactive form state with TypeScript typing
const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref<boolean>(false)
const successMessage = ref<string>('')

// Handle form submission simulation
const handleSubmit = () => {
  isSubmitting.value = true
  successMessage.value = ''

  // Simulate API request or email dispatch
  setTimeout(() => {
    isSubmitting.value = false
    successMessage.value = 'Thank you! Your message has been sent successfully.'
    
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 1000)
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    
    <!-- Header Section -->
    <div class="space-y-4 mb-16 text-center max-w-2xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
        Get In <span class="text-sky-400">Touch</span>
      </h1>
      <p class="text-slate-400 text-lg leading-relaxed">
        Have a project in mind, a role opportunity, or want to discuss full-stack Laravel and AI architecture? Drop me a message!
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      
      <!-- Contact Info Sidebar -->
      <div class="lg:col-span-1 space-y-6">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
          <h2 class="text-2xl font-bold text-slate-100">Contact Details</h2>
          
          <div class="space-y-4 text-sm">
            <div>
              <p class="text-slate-400 font-medium">Location</p>
              <p class="text-slate-200 mt-1">Cairo, Egypt</p>
            </div>
            
            <div>
              <p class="text-slate-400 font-medium">Email</p>
              <a href="mailto:abdelhmedfthy3702@gmail.com" class="text-sky-400 hover:underline mt-1 block">
                abdelhmedfthy3702@gmail.com
              </a>
            </div>

            <div>
              <p class="text-slate-400 font-medium">Phone</p>
              <a href="tel:+201123281471" class="text-slate-200 hover:text-sky-400 mt-1 block">
                (+20) 1123281471
              </a>
            </div>
          </div>

          <div class="pt-6 border-t border-slate-800 space-y-3">
            <p class="text-slate-400 font-medium text-sm">Profiles</p>
            <div class="flex flex-col space-y-2">
              <a href="https://linkedin.com/in/abdelhamed-fathy" target="_blank" rel="noopener noreferrer" class="text-sm text-sky-400 hover:underline">
                LinkedIn Profile
              </a>
              <a href="https://github.com/3bdel7med" target="_blank" rel="noopener noreferrer" class="text-sm text-sky-400 hover:underline">
                GitHub Repository (3bdel7med)
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Name Input -->
            <div class="space-y-2">
              <label for="name" class="block text-sm font-medium text-slate-300">Your Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                placeholder="John Doe"
                class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>

            <!-- Email Input -->
            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium text-slate-300">Your Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                placeholder="john@example.com"
                class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
          </div>

          <!-- Subject Input -->
          <div class="space-y-2">
            <label for="subject" class="block text-sm font-medium text-slate-300">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              required
              placeholder="Project Collaboration / Job Opportunity"
              class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <!-- Message Textarea -->
          <div class="space-y-2">
            <label for="message" class="block text-sm font-medium text-slate-300">Message</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5"
              required
              placeholder="Write your message here..."
              class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-sky-500 transition-colors resize-none"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-colors shadow-lg shadow-sky-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <span v-if="isSubmitting">Sending...</span>
            <span v-else>Send Message</span>
          </button>

          <!-- Success Feedback -->
          <p v-if="successMessage" class="text-emerald-400 text-sm text-center font-medium mt-4">
            {{ successMessage }}
          </p>

        </form>
      </div>

    </div>

  </div>
</template>