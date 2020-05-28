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
    component: () => import('../views/About.vue')
  },
  {
    path: '/eventsbyarea',
    name: 'EventsByArea',
    component: () => import('../views/EventsByArea.vue')
  },
  {
    path: '/eventsbylocation',
    name: 'EventsByLocation',
    component: () => import('../views/EventsByLocation.vue')
  },
  {
    path: '/eventsnearby',
    name: 'EventsNearby',
    component: () => import('../views/EventsNearby.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
