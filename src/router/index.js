import Vue from 'vue'
import VueRouter from 'vue-router'
import Bitcoin from '../components/bitcoin.vue'
import Timer from '../components/timer.vue'
import Weather from '../components/weather.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/bitcoin',
    name: 'Bitcoin',
    component:Bitcoin
  },
  {
    path: '/timer',
    name: 'Timer',
    component:Timer
  },
]

const router = new VueRouter({
  routes
})

export default router
