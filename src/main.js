/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'

import Vue1 from './views/vue1'
import Vue2 from './views/vue2'
import Vue3 from './views/vue3'

Vue.use(VRouter)

let router = new VRouter({
  mode: 'history',  
  routes: [
    {
      path: '/Vue1',
      component: Vue1
    },
    {
      path: '/Vue2',
      component: Vue2
    },
    {
      path: '/Vue3',
      component: Vue3
    }
  ]
})  

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#wrap',
  router,
  components: { App },
  template: '<App/>'
})
