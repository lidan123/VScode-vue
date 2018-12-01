/* eslint-disable new-cap */
/* eslint-disable no-trailing-spaces */
/* eslint-disable vue/no-dupe-keys */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-redeclare */
/* eslint-disable eol-last */
/* eslint-disable import/first */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-dupe-keys */
/* eslint-disable comma-spacing */
/* eslint-disable no-undef */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue库
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VRouter from 'vue-router'
import Vuex from 'vuex'

import Apple from './components/apple'
import Banana from './components/banana'
import RedApple from './components/redapple'

// 注册
Vue.use(VRouter)
Vue.use(ElementUI)
Vue.use(Vuex)

// 全局注册组件
// Vue.component('lidan',{
//   template: '<p>this is lidan</p>'
// })

// var headerChild = {
//   template: '<p>this is my headerChild</p>'
// }

// var header = {
//   template: '<p v-text="1132" v-on:keydown.enter=""><my-header-child></my-header-child></p>',
//   components: {
//     "my-header-child": headerChild
//   }
// }

// 实例路由
let router = new VRouter({
  mode: 'history',  
  routes: [
    {
      path: '/apple',
      component: Apple,
      name: 'appleRoute',
      children: [
        // 子组件
        {
          path: 'red',
          component: RedApple
        }
      ]
    },
    {
      path: '/banana',
      component: Banana
    }
  ]
})  
// 实例vuex
let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  getters: {
    // 获取值
    getTotal (state) {
      return state.totalPrice
    }
  },
  mutations: {
    // 同步操作-更改state中的状态
    increment (state,price) {
      state.totalPrice += price
    },
    decrement (state,price) {
      state.totalPrice -= price
    }
  },
  actions: {
    // 异步操作（与后端交互api一般放在action）
    increase (context,price) {
      context.commit("increment",price)
    }
  }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
// 根组件
// eslint-disable-next-line no-unused-vars
var my = new Vue({
  el: '#app',
  router,
  store,  
  template: "<app/>",
  components: {
    App
  }
  // render: h => h(App)
// eslint-disable-next-line eol-last
})