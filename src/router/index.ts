import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import GlobalStore from '../views/GlobalStore.vue'
import PageStore from '../views/PageStore.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'GlobalStore',
    component: GlobalStore
  },
  {
    path: '/pageStore',
    name: 'PageStore',
    component: PageStore
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
