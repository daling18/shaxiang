import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/admin.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/admin.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes,
})

export default router
