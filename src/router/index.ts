import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-request',
    name: 'Add request',
    component: () => import('../pages/AddRequestPage.vue')
  },
  {
    path: '/request/:id?',
    name: 'Request',
    component: () => import('../pages/RequestPage.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router