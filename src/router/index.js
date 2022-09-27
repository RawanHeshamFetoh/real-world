import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/AboutView.vue'
import EventDetails from '../components/EventDetails'

const routes = [
  {
    path: '/',
    name: 'home',
    component: EventList
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path:'/event/:id',
    name:'eventDetails',
    component:EventDetails,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
