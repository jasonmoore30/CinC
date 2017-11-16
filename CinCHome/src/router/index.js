import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Experiences from '@/components/Experiences'
import Faculty from '@/components/Faculty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, 
    {
      path: '/experiences',
      name: 'Experiences',
      component: Experiences
    },
    {
      path: '/faculty',
      name: 'Faculty',
      component: Faculty
    }
  ]
})
