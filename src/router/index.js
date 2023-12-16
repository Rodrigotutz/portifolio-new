import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import AppsView from '../views/AppsView'

const siteName = 'Rodrigo Tutz'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Início | " + siteName
    }
  },
  {
    path: '/sobre',
    name: 'about',
    component: AboutView,
    meta: {
      title: "Sobre | " + siteName
    }
  },
  {
    path: '/apps',
    name: 'apps',
    component: AppsView,
    meta: {
      title: "Apps | " + siteName
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( (to, from) => {
  document.title = to.meta?.title ?? "Rodrigo Tutz"
} )

export default router
