import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Experiences from '@/components/Experiences'
import Faculty from '@/components/Faculty'
import Application from '@/components/Application'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, 
    {
      path: '/Faculty/experiences',
      name: 'Experiences',
      component: Experiences
    },
    {
      path: '/Faculty',
      name: 'Faculty',
      component: Faculty
    } ,
    {
      path: '/application', 
      name: 'Application', 
      component: Application
    }
  ]
})
