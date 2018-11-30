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
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 全局注册组件
Vue.component('lidan',{
  template: '<p>this is lidan</p>'
})

var headerChild = {
  template: '<p>this is my headerChild</p>'
}

var header = {
  template: '<p v-html="fatherHeader" v-text="1132" v-on:keydown.enter=""><my-header-child></my-header-child></p>',
  components: {
    "my-header-child": headerChild
  }
}

Vue.config.productionTip = false
/* eslint-disable no-new */
// 根组件
// eslint-disable-next-line no-unused-vars
var my = new Vue({
  el: '#app',
  router,
  components: { App },
  data: {
    title: 'hello main.js' // 数据渲染
  },
  components: {
    "my-header": header
  }
// eslint-disable-next-line eol-last
})