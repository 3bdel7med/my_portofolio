<script setup lang="ts">
const pdfPath = './assets/Abdelhamed_Fathy_CV.pdf' // Path to your CV PDF file'
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-slate-300">
    
    <!-- Top Action Bar -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
      <div>
        <h1 class="text-3xl font-extrabold text-slate-100">Abdelhamed Fathy</h1>
        <p class="text-sky-400 font-medium">Full-Stack Software Engineer (Laravel & Vue.js)</p>
      </div>
      <a 
        :href="pdfPath" 
        download="Abdelhamed_Fathy_CV.pdf"
        class="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-sm transition-colors shadow-lg shadow-sky-500/20 flex items-center gap-2"
      >
        <span>Download My CV (PDF)</span>
      </a>
    </div>

    <!-- Main CV Content Container -->
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8 shadow-xl">
      
      <!-- Contact Info Bar -->
      <div class="flex flex-wrap gap-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
        <span>📍 Cairo, Egypt</span>
        <span>📞 (+20) 1123281471</span>
        <span>📧 abdelhmedfthy3702@gmail.com</span>
        <span>🔗 linkedin.com/in/abdelhamed-fathy</span>
        <span>💻 github.com/3bdel7med</span>
      </div>

      <!-- Professional Summary -->
      <div class="space-y-2">
        <h2 class="text-lg font-bold text-sky-400 uppercase tracking-wider">Professional Summary</h2>
        <p class="text-sm leading-relaxed text-slate-300">
          Full-Stack Software Engineer with strong hands-on expertise in PHP (Laravel), Vue.js, and AI-driven web applications. Proven track record of architecting production-grade platforms, real-time communication systems, and open-source packages focusing on automated database optimization and AI integration (Gemini API, RAG, FastAPI). Passionate about scalable architecture, high-performance web applications, and solving complex backend challenges.
        </p>
      </div>

      <!-- Technical Skills -->
      <div class="space-y-3">
        <h2 class="text-lg font-bold text-sky-400 uppercase tracking-wider">Technical Skills</h2>
        <div class="grid grid-cols-1 gap-3 text-sm">
          <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <strong class="text-slate-200">Backend & Architecture:</strong> PHP (Laravel), Python (FastAPI), RESTful API Design, Microservices, Event-Driven Architecture, Queue-Based Job Processing
          </div>
          <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <strong class="text-slate-200">Frontend:</strong> Vue.js 3 (Composition API), Inertia.js, Pinia, Blade, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3
          </div>
          <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <strong class="text-slate-200">Real-Time & Performance:</strong> WebSockets (Laravel Reverb, Pusher), WebRTC Signaling, Redis (Queues, Caching & Presence Channels), MySQL Query Optimization
          </div>
          <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <strong class="text-slate-200">AI Integration:</strong> Google Gemini API, OpenAI APIs, LangChain, RAG Systems, Vector Databases (ChromaDB), Custom NLP Model Training (scikit-learn)
          </div>
          <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <strong class="text-slate-200">DevOps & Tools:</strong> Docker & Docker Compose, Git, GitHub Actions, Jenkins CI/CD, Linux (Ubuntu/WSL2), Postman
          </div>
        </div>
      </div>

      <!-- Projects -->
      <div class="space-y-4">
        <h2 class="text-lg font-bold text-sky-400 uppercase tracking-wider">Projects</h2>
        
        <!-- Project 1 -->
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <div class="flex justify-between items-start flex-wrap gap-2">
            <h3 class="font-bold text-slate-100">OptiQuery AI — Automated Database Optimization Platform</h3>
            <span class="text-xs text-slate-400">Jul 2026 – Sep 2026</span>
          </div>
          <p class="text-xs text-sky-400">Laravel · Vue.js 3 · Inertia.js · FastAPI · ChromaDB · Gemini AI · Docker</p>
          <ul class="list-disc list-inside text-xs text-slate-300 space-y-1">
            <li>Engineered a self-built Laravel client package that intercepts slow SQL queries and automates EXPLAIN-plan analysis via Gemini AI to diagnose root causes and suggest actionable indexes.</li>
            <li>Architected a FastAPI microservice integrated with ChromaDB powering a RAG-based assistant for conversational root-cause analysis and performance tuning.</li>
            <li>Delivered a Vue.js 3 + Inertia.js dashboard for visualizing query health trends and reviewing AI-suggested schema fixes in real time.</li>
          </ul>
        </div>

        <!-- Project 2 -->
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <div class="flex justify-between items-start flex-wrap gap-2">
            <h3 class="font-bold text-slate-100">Bazzario — Multi-Vendor E-Commerce Platform</h3>
            <span class="text-xs text-slate-400">May 2026 – Jun 2026</span>
          </div>
          <p class="text-xs text-sky-400">Laravel · Blade · FastAPI · Redis · Docker · Laravel Reverb</p>
          <ul class="list-disc list-inside text-xs text-slate-300 space-y-1">
            <li>Architected a multi-role marketplace (Admin, Vendor, Customer) with isolated dashboards, strict role-based permission rules, and robust order/inventory management.</li>
            <li>Integrated an LLM pipeline for automated product descriptions and built a customer-facing AI shopping assistant, optimizing real-time communications using Laravel Reverb and Redis.</li>
            <li>Designed the multi-tenant data layer to keep vendor stores fully isolated while sharing a single scalable codebase and deployment pipeline.</li>
          </ul>
        </div>

        <!-- Project 3 -->
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <div class="flex justify-between items-start flex-wrap gap-2">
            <h3 class="font-bold text-slate-100">Nexus — Real-Time Chat & AI Communication Platform</h3>
            <span class="text-xs text-slate-400">Apr 2026 – Jun 2026</span>
          </div>
          <p class="text-xs text-sky-400">Laravel · WebSockets · WebRTC · Redis Queues · Gemini AI</p>
          <ul class="list-disc list-inside text-xs text-slate-300 space-y-1">
            <li>Built an event-driven real-time chat platform supporting 1-to-1/group conversations, asynchronous voice message processing via queues, and instant push notifications.</li>
            <li>Implemented WebRTC signaling for low-latency peer-to-peer calls and embedded Gemini AI for context-aware, instant automated replies.</li>
            <li>Designed a Redis-backed queue architecture to offload media and AI processing, keeping the chat interface responsive under heavy load.</li>
          </ul>
        </div>
      </div>

      <!-- Open-Source Packages -->
      <div class="space-y-4">
        <h2 class="text-lg font-bold text-sky-400 uppercase tracking-wider">Open-Source Packages</h2>
        
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h3 class="font-bold text-slate-100">Sentinel AI — AI-Powered Laravel Exception Monitor (2026)</h3>
          <p class="text-xs text-sky-400">Laravel · Google Gemini AI · Blade · Tailwind CSS</p>
          <ul class="list-disc list-inside text-xs text-slate-300 space-y-1">
            <li>Built an open-source Laravel package that automatically captures application exceptions and uses Gemini AI to generate root-cause explanations and fixes in Arabic and English.</li>
            <li>Shipped a zero-config, plug-and-play Blade + Tailwind dashboard for browsing, filtering, and clearing error logs with no extra frontend setup.</li>
          </ul>
        </div>

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h3 class="font-bold text-slate-100">OptiQuery Laravel — Slow Query Reporting Client (2026)</h3>
          <p class="text-xs text-sky-400">Laravel · MySQL · Async HTTP</p>
          <ul class="list-disc list-inside text-xs text-slate-300 space-y-1">
            <li>Published a Laravel client package that asynchronously reports slow SQL queries (Http::async(), configurable threshold) with zero performance overhead on the host app.</li>
            <li>Auto-captures EXPLAIN plans and table DDL per query for AI analysis, with built-in infinite-loop protection and zero-config Laravel package discovery.</li>
          </ul>
        </div>
      </div>

      <!-- Professional Experience -->
      <div class="space-y-4">
        <h2 class="text-lg font-bold text-sky-400 uppercase tracking-wider">Professional Experience</h2>
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
          <div class="flex justify-between flex-wrap gap-2"><h3 class="font-bold text-slate-100">Full-Stack Software Engineer — Freelance / Self-Employed</h3><span class="text-xs text-slate-400">Aug 2026 – Present</span></div>
          <p class="text-xs text-slate-300">Designed and deployed scalable full-stack applications using Laravel, Vue.js, and Docker for cross-border clients; integrated LLMs and custom prompt workflows to automate client support and operational tasks.</p>
        </div>
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
          <div class="flex justify-between flex-wrap gap-2"><h3 class="font-bold text-slate-100">PHP Developer — Upwork (Freelance)</h3><span class="text-xs text-slate-400">Jul 2023 – Mar 2024</span></div>
          <p class="text-xs text-slate-300">Built secure RESTful APIs and optimized complex MySQL queries with Redis caching strategies to improve response times.</p>
        </div>
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
          <div class="flex justify-between flex-wrap gap-2"><h3 class="font-bold text-slate-100">PHP Developer Trainee — Information Technology Institute (ITI)</h3><span class="text-xs text-slate-400">Aug 2022 – Sep 2022</span></div>
          <p class="text-xs text-slate-300">Developed backend components adhering to MVC architectural patterns and clean code standards.</p>
        </div>
      </div>

      <!-- Military Service & Education -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
          <h3 class="font-bold text-sky-400 text-sm">Military Service</h3>
          <p class="text-xs text-slate-300">Completed mandatory military service — Egyptian Armed Forces, Air Defense Forces — with Honorable Discharge (Jan 2025 – Mar 2026).</p>
        </div>

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
          <h3 class="font-bold text-sky-400 text-sm">Education</h3>
          <p class="text-xs text-slate-300">Bachelor's Degree in Electronic Engineering — Menoufia University.</p>
        </div>
      </div>

      <!-- Languages -->
      <div class="space-y-1">
        <h2 class="text-lg font-bold text-sky-400 uppercase tracking-wider">Languages</h2>
        <p class="text-xs text-slate-300">
          <strong>Arabic:</strong> Native | <strong>English:</strong> Professional Working Proficiency (Strong Reading & Writing)
        </p>
      </div>

    </div>

  </div>
</template>