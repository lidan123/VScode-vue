<template>
  <div class="ld_comp" id="ld_comp">
    <h1>{{ msg }}</h1>
    <h2>测试components用法</h2>
    <link rel="stylesheet" href="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '李丹的第一个vue项目1！'
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
