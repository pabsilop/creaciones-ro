import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Catalog from '@/pages/Catalog.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalogo', name: 'Catalog', component: Catalog },
  { path: '/sobre-mi', name: 'About', component: About },
  { path: '/contacto', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
