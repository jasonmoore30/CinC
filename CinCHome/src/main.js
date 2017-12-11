// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import router from './router'

import axios from 'axios'

// import 'vue-event-calendar/dist/style.css'
// import vueEventCalendar from 'vue-event-calendar'
// Vue.use(vueEventCalendar, {locale: 'us'})

Vue.use(Vuetify)
Vue.use(axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
