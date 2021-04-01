import Vue from 'vue'
import VueRouter from 'vue-router'
import {authRoutes} from "@/modules/auth";
import {dashboardRoutes} from "@/modules/dashboard";
import userRoutes from "@/modules/users/routes";

Vue.use(VueRouter)

export const routes = [
    ...dashboardRoutes,
    ...userRoutes,
    ...authRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
