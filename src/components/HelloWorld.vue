<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--
    <h2  v-for="(value,key,index) in user">
         {{index}}- {{key}}:{{value}}
    <h2>
      -->
    
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String

  },data:function(){


    return {

      user:{name:"" ,age:32, agender:0, skills:["C#","Dynamics 365","Asp.net core"]}
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
