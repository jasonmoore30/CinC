import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/Courses'
import Students from '@/components/Students'
import Experiences from '@/components/Experiences'
import Travel from '@/components/Travel'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'
import Home from '@/components/Home'
import Community from "@/components/Community"
import Faculty from '@/components/Faculty'
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Facutly/experiences',
      name: 'Experiences',
      component: Experiences
    },
    {
      path: '/Faculty',
      name: 'Faculty',
      component: Faculty
    },
    {
      path: '/Faculty/courses',
      name: "Courses",
      component: Courses
    },
    {
      path: '/Students/experiences',
      name: 'Experiences',
      component: Experiences
    },
    {
      path: '/Students/awards',
      name: "Student Awards",
      component: Awards
    },
    {
      path: '/Students/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/Students',
      name: 'Students',
      component: Students
    },
    {
      path: '/Courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/Calendar',
      name:'Calendar',
      component: Calendar
    },
    {
      path: 'Students/projectops',
      name: 'Project Opportunities',
      components: Projects
    },
    {
      path: '/Students/travelops',
      name: 'Travel Opportunities',
      component: Travel
    },
    {
      path: '/',
      name: 'CinC Home',
      component: Home
    },
    {
      path: '/CommunityPartners',
      name: "CinC Community",
      component: Community
    }
  ]
})
