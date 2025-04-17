import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../views/MainLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainLayout
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
