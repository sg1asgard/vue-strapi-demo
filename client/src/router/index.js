import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const loadComponent = (view) => {
  return () => import(`../views/${view}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadComponent('HomeView')
    },
    {
      path: '/about',
      name: 'about',
      component: loadComponent('AboutView')
    }
  ]
})

export default router
