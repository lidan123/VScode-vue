<template>
  <div class="ld_comp">
    <h1>{{ msg }}</h1>
    <p>{{$route.params.color}}</p>
    <p>{{$route.params.type}}</p>
    <button @click="getParam">getParam</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data () {
    return {
      msg: 'I am apple！'
    }
  },
  methods: {
    getParam () {
      console.log(this.$route.params)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
