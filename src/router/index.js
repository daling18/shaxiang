import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/assets',
    component: () => import('../views/assets.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/login.vue'),
    meta: {
      layout: 'blank',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes,
})

export default router
