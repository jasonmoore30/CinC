import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/Courses'
import Students from '@/components/Students'
import Experiences from '@/components/Experiences'
import Travel from '@/components/Travel'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/experiences',
      name: 'Experiences',
      component: Experiences
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/students',
      name: 'Students',
      component: Students
    },
    {
      path: '/projects',
      name: 'Project Opportunities',
      components: Projects
    },
    {
      path: '/travel',
      name: 'Travel Opportunities',
      component: Travel
    }
  ]
})
