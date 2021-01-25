import Vue from 'vue'
import VueRouter from 'vue-router'
import Bitcoin from '../components/bitcoin.vue'
import Timer from '../components/timer.vue'
import Weather from '../components/weather.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/weather',
    name: 'Weather',
    component: Weather,
    meta: { transition: 'fade-in-right' },
  },
  {
    path: '/bitcoin',
    name: 'Bitcoin',
    component:Bitcoin,
    meta: { transition: 'fade-in-right' },
  },
  {
    path: '/timer',
    name: 'Timer',
    component:Timer,
    meta: { transition: 'fade-in-right' },
  },
]

const router = new VueRouter({
  routes
})

export default router
