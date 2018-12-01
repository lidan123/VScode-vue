<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <h1>app.vue</h1>
    <router-view></router-view>
    <router-link :to="{path: '/apple'}">to apple</router-link>
    <router-link :to="{name: 'appleRoute'}">to apple</router-link>
    <router-link :to="{path: '/banana'}">to banana</router-link>
    <router-link :to="{path: '/apple/red'}">to appleREd</router-link>
    {{totalPrice}}
    <vuex1></vuex1>
    <vuex2></vuex2>
  </div>
</template>

<script>
import Vuex1 from "./components/vuex1"
import Vuex2 from "./components/vuex2"

export default {
  name: 'app',
  components: {
    Vuex1,
    Vuex2
  },
  computed: {
    totalPrice () {
      return this.$store.state.totalPrice
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
