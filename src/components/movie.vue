<template>
  <div class="hello">
<h2>test </h2>
     


     <ul id="example-1">
         <br/>
  <li v-for="item in movies" :key="item">
    {{ item }}
    <div class="player-container">
    <video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
    </div>


  </li>

</ul>
  </div>
</template>
<script>
 //引入video样式
 import 'video.js/dist/video-js.css'
 import 'vue-video-player/src/custom-theme.css'
 import 'videojs-contrib-hls.js/src/videojs.hlsjs'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
 
        data: function () {
  return {
            movies:["Love.2015.Bluray.1080p.DTS-HD.x264-Grym/Love.2015.Bluray.1080p.DTS-HD.x264-Grym.mkv"
            ,"Romance (1999)/Romance (1999).avi"]}
            

            

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
