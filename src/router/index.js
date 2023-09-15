import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Create from '../views/CreateBook.vue'
import Liste from '../views/ListeBooks.vue'
import About from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/liste',
      name: 'liste',
      component: Liste
    }
  ]
})

export default router
