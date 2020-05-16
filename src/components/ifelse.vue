<template>

<div>
    <h2> IFLSE 测试页面{{message}}</h2>
       

       环境变量:{{}} <br>
      id: {{this.$route.params.id}}
         <br>
         isTrue:{{isTrue}}
          <br>
        <a @click="doSomething">doSomtthing</a>
        <div>
            通过点击doSomething判断是否显示下面的方框
            <p  v-if="dis==0"  style=" display:block; background-color:red; color:white">
                v-if方框 {{dis}}
            </p>
             <p  v-else-if="dis==1"  style=" display:block; background-color:green; color:white">
                 v-else方框 {{dis}}
            </p>
             <p  v-else  style=" display:block; background-color:black; color:white">
                 v-else方框 {{dis}}
            </p>

             <p  v-show="isTrue"  style=" display:block; background-color:black; color:white">
                 v-show {{isTrue}}
            </p>
        </div>

</div>

</template>
<script>
export default{

    name:"ifelse",
    props:{msg:String}
    ,data:function(){
        return {

            isTrue:true
            ,dis:0
        }
    }
    ,methods:{
        doSomething:function(){
            this.isTrue=!this.isTrue;

            console.log(process.env.VUE_APP_TITLE)
            if(this.dis==0){
            this.dis=1;

            }else  if(this.dis==1) {
            this.dis=2;

            }else
            {

            this.dis=0;

            }
        }
    }

}
</script>
<style>

</style>