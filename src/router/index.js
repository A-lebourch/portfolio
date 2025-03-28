import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  { path: '/portfolio', component: HomeView },
  { path: '/portfolio/about', component: AboutView },
  { path: '/portfolio/projects', component: ProjectsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
