<template>
  <div class="ld_comp">
    <h1>{{ msg }}</h1>
    <button @click="addOne">add one</button>
    <button @click="minusOne">minus one</button>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data () {
    return {
      msg: 'I am vuex2',
      price: 15
    }
  },
  methods: {
    addOne () {
      this.$store.commit("increment",this.price)
    },
    minusOne () {
      this.$store.commit("decrement",this.price)
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
