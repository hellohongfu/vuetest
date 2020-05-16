<template>
  <div class="hello">
    <h1>{{ msg|capitalize|reverse }}</h1>
   
    <h2>用户信息</h2>

    <ol>
    <li v-for="(value,key,index) in user" :key="index">
        NO:  {{index+1}}  {{key}}:{{value}}
    </li>

    <label for="username">姓名</label><input name="username" v-model="user.name">

  </ol>
    <!--
    <h2  v-for="(value,key,index) in user">
         {{index}}- {{key}}:{{value}}
    <h2>
      -->
      <h2>v-html 内容测试</h2>
   <p>
     测试V-Html 属性
   </p>
   <p v-html="testhtml">
     测试V-Html 属性
   </p>

    <p v-html="testhtml2"></p>

    <h2>v-bind</h2>
    <p v-bind:class="{'class1':use}"> 中国人民可以打败,不能被征服</p>

    <h2>表达式</h2>
    <p>
        {{5+6}}<br>
        {{ok? true : no}}<br>
        {{user.name.split('').reverse().join('')}}<br>
        <span v-bind:id="'list_' + id" v-bind:class="{'class1':use}">
          菜鸟教程
        </span>


    </p>
     <h2>指令</h2>
     <p>
        <span v-if="cansee"> 你能看到我</span>
        <span v-if="!cansee">你不能看到我 </span>
     </p>
    
      <h2>参数</h2>
     <p>
        <pre>
          
          <a v-bind:href="url">必应才是最好的搜索</a>
          <a v-on:click="doSomething
          ">点击查看效果</a>
        </pre>
     </p>
     
      <h2>修饰符</h2>
      <form  v-on:submit.prevent="onSubmit">
        <input v-model="url" />
      </form>

       <h2>用户输入</h2>
      <div>
        <input v-model="msg" />
      </div>

      <h2>缩写</h2>
      
      <div>
        <input v-model="url2" />
        <a :href="url2" target="blank" >https://www.bing.com</a>
        <a @click="doSomething" >doSomething</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String

  },data:function(){


    return {

      user:{name:"hellohongfu" ,age:32, agender:0, skills:["C#","Dynamics 365","Asp.net core"]}
      ,testhtml:"<span>测试1</span><a href='#' >点击打开精彩内容</a>"
       ,testhtml2:"为什么第一个html没有出现"
       ,use:true
       ,ok:false
       ,id:"div_test1"
       ,cansee:true
       ,url:"https://www.bing.com"
       ,url2:"https://www.bing.com"

    }
  
  },
    methods:{

      doSomething:function(){

        alert('Test DoSomeThing')
      }


    }
    ,filters:{

      capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    ,    reverse: function (value) {
      if (!value) return ''
      value = value.toString()

      return value.split(' ').reverse().join('');
     
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
.class1 {

 color: red; font-size: 20px;
}
</style>
