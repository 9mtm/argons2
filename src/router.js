import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/Home.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => {
      return import(/* webpackChunkName: "jobs" */ "@/views/Jobs.vue")
    },
  },
  {
    path: "/market",
    name: "market",
    component: () => {
      return import(/* webpackChunkName: "market" */ "@/views/Market/index.vue")
    },
  },
  {
    path: "/market/:id",
    name: "marketItem",
    component: () => {
      return import(
        /* webpackChunkName: "market_id" */ "@/views/Market/_id.vue"
      )
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
