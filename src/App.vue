<template>
  <div id="appVue">
    <Aside></Aside> 
    <Header></Header>
   
    <div class="content">
        <div class="container" :style="{'height':contentH+'px'}">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header'
import Aside from './components/aside'

export default {
  components: {
    Header,Aside
  },
  name: 'App',
    data () {
    return {
      contentH:300,
      calHeight:{
          height: this.contentH+"px"
      }
    }
  },
  mounted () {
    //   页面加载完成计算可视窗口高度并赋值
    let h = document.documentElement.clientHeight-70;
    this.contentH= h;

    window.onresize = () => {
      return (() => {
        let h = document.documentElement.clientHeight-70;
        this.contentH= h;
      })()
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

.content{
    width:88%;
    position: fixed;
    top: 52px;
    left: 12%; 
}
.content .container{
    background: #efefef;
    margin: 10px 6px 0 4px;
}
</style>
