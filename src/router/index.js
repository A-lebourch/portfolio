import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TurtleBotProject from '../views/TurtleBotProject.vue'
import TiagoProject from '../views/TiagoProject.vue'
import DashboardProject from '../views/DashboardProject.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectsView },
  { path: '/projects/turtlebot', component: TurtleBotProject },
  { path: '/projects/tiago', component: TiagoProject },
  { path: '/projects/dashboard', component: DashboardProject }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
