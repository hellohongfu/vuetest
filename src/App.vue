<template>
  <div id="app">
 
 <h1>Hello App!</h1>
 <p>
    路由参数 id:{{this.$route.params.id}}
    路由Query username:{{this.$route.query.username}}
 </p>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link :to="{ name: 'HelloWorld', params: { id: 123 }}">HelloWorld</router-link>|
    <router-link :to="{ name: 'ajaxdemo', params: { id: 123 }}">ajaxdemo</router-link>|

    <router-link :to="{ name: 'ifelse', params: { id: 123 }}">ifelse</router-link>|
    <router-link :to="{ name: 'computedjs', params: { id: 123 }}">computedjs</router-link>|
    <router-link :to="{ name: 'forjs', params: { id: 123 }}">forjs</router-link>|

  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view>
  <HelloWorld></HelloWorld>
  <ifelse></ifelse></router-view>
  </div>
</template>

<script>
// import ifelse from './components/ifelse.vue'

// import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
   // HelloWorld,ifelse
  },computed:{

    username:function(){
       // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }

  },methods:{

    goback:function(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
document.write(vm.data);
vm.data={name:"张佳丽"" ,age:32, agender:0, skills:["C#","Dynamics 365","Asp.net core"]}
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
