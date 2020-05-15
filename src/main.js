import Vue from 'vue'
import App from './App.vue'

//vidio
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
