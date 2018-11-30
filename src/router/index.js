import Vue from 'vue'
import Router from 'vue-router'
import HelloLidan from '@/components/HelloLidan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloLidan',
      component: HelloLidan
    }
  ]
})
