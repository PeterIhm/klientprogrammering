import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/eventsbyarea',
    name: 'EventsByArea',
    component: () => import(/* webpackChunkName: "about" */ '../views/EventsByArea.vue')
  },
  {
    path: '/eventsbylocation',
    name: 'EventsByLocation',
    component: () => import(/* webpackChunkName: "about" */ '../views/EventsByLocation.vue')
  },
  {
    path: '/eventsnearby',
    name: 'EventsNearby',
    component: () => import(/* webpackChunkName: "about" */ '../views/EventsNearby.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
