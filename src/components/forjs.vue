<template>
<div>
    <label for="username">username</label>
    <input name="username" v-model="name">
    <button  @click="doSomething"  title="增加学员" >增加学员</button>

    <ul>
            <li v-for="(name,index) in users" :key="index" >
                {{name}}{{index}}<a @click="remove({index})">移除学员</a>
            </li>
    </ul>
</div>
</template>
<script>
export default {
    name:"forlearn",
    props:{ 
        msg:String
    },
    data:function(){

        return {

            users:[
                {name:"Stu1"}
                , {name:"Stu2"}
                , {name:"Stu3"}
                , {name:"Stu4"}


            ]
            ,name:""

        }
    },
    methods:{
        doSomething:function(){
            this.users.push(
                {name:this.name}
            )

        },
        remove:function(index){
            this.users.splice(index,1);

        }
    }
}
</script>