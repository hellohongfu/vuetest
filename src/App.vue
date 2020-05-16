<template>
  <div id="app">
  <computedjs msg="computed DEMO"></computedjs>

  <img alt="Vue logo" src="./assets/logo.png">

  </div>
</template>

<script>


import computedjs from './components/computedjs.vue'


export default {
  name: 'App',
  components: {
   
    computedjs
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
