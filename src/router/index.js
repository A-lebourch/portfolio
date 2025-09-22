import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TurtleBotProject from '../views/TurtleBotProject.vue'
import TiagoProject from '../views/TiagoProject.vue'
import DashboardProject from '../views/DashboardProject.vue'
import ornithoptere from '../views/ornithoptere.vue'
import portfolio from '../views/portfolio.vue'
import InProgressView from '../views/InProgressView.vue'
import WorkExperienceView from '../views/WorkExperienceView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectsView },
  { path: '/work_experience', component: WorkExperienceView },
  { path: '/in_progress', component: InProgressView },
  { path: '/projects/turtlebot', component: TurtleBotProject },
  { path: '/projects/tiago', component: TiagoProject },
  { path: '/projects/dashboard', component: DashboardProject },
  { path: '/projects/portfolio', component: portfolio },
  { path: '/projects/ornithoptere', component: ornithoptere }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
