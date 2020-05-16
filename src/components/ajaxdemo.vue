<template>
    <div>
       ajax.info {{info}}
       <p>
        
       </p>
       <br>
       data:{{JSON.stringify(obj)}}
    </div>

</template>
<script>

import axios from 'axios';
export default {
    name:"httprequestAjax",
    props:{
        msg:String
    },
    data:function(){
        return {
            info:"",
            obj:{}
        }
    },
  mounted () {
    axios.get("/try/ajax/json_demo.json").then(response=>(this.info=response)).catch((error) => {
                  console.warn(error)
                });
  }
    
}
</script>