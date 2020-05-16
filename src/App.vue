<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" data=""  />
  <test></test>
  <ifelse msg="测试IF ELSE"></ifelse>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import test from './components/test.vue'
import ifelse from './components/ifelse.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
    
    ,test
    ,ifelse
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
