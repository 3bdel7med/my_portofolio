import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {title: 'Abdelhmed Fathy | Home'},
    },
    {
      path: '/about',
      name: 'about',
      meta: {title: 'Abdelhmed Fathy | About'},
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {title: 'Abdelhmed Fathy | Contact'},
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/education',
      name: 'education',
      meta: {title: 'Abdelhmed Fathy | Education'},
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EducationView.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      meta: {title: 'Abdelhmed Fathy | Skills'},
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SkillsView.vue'),
    },
    {
      path: '/cv',
      name: 'cv',
      meta: {title: 'Abdelhmed Fathy | CV'},
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CvView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectsView.vue'),
      meta: {title: 'Abdelhmed Fathy | Projects'},

    },
  ],
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - Abdelhmed Fathy` : 'Abdelhmed Fathy'
  next()
})
export default router
