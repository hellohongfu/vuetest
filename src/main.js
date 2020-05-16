import Vue from 'vue'
import App from './App.vue'


//vidio
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

//router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// npm install axios
import axios from 'axios'

//

axios.defaults.baseURL = '/api'  //关键代码

Vue.use(axios);



import computedjs from './components/computedjs.vue'
import forjs from './components/forjs.vue'
import HelloWorld from './components/HelloWorld.vue'
import ifelse from './components/ifelse.vue'
import ajaxdemo from './components/ajaxdemo.vue'



// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/computedjs/:id', component: computedjs,name:"computedjs" },
  { path: '/forjs/:id', component: forjs ,name:"forjs"},
  { path: '/ifelse/:id', component: ifelse,name:"ifelse" }
  , { path: '/HelloWorld/:id', component: HelloWorld ,name:"HelloWorld"}
  , { path: '/ajaxdemo/:id', component: ajaxdemo ,name:"ajaxdemo"}
]


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
