<!--
<template>
    <div class="footer" id="footer">
      <audio controls>
        <source src="http://tyst.migu.cn/public/ringmaker01/n2/Product/2010/06/2010%E5%B9%B46%E6%9C%884%E6%97%A5%E9%A2%84%E5%AE%A1%E4%B8%9C%E6%96%B9%E4%BC%A0%E9%9F%B575%E9%A6%96/%E5%BD%A9%E9%93%83/7_mp3-128kbps/%E5%AF%B9%E4%B8%8D%E8%B5%B7%E6%82%A8%E6%8B%A8%E6%89%93%E7%9A%84%E7%94%B5%E8%AF%9D%E5%B7%B2%E5%81%9C%E6%9C%BA-%E8%BE%A3%E7%AC%94%E5%B0%8F%E5%A6%96.mp3?channelid=08&msisdn=dad03578-c13e-4ac3-beae-cf8ad1f4924a" type="audio/ogg">
        <source src="http://tyst.migu.cn/public/ringmaker01/n2/Product/2010/06/2010%E5%B9%B46%E6%9C%884%E6%97%A5%E9%A2%84%E5%AE%A1%E4%B8%9C%E6%96%B9%E4%BC%A0%E9%9F%B575%E9%A6%96/%E5%BD%A9%E9%93%83/7_mp3-128kbps/%E5%AF%B9%E4%B8%8D%E8%B5%B7%E6%82%A8%E6%8B%A8%E6%89%93%E7%9A%84%E7%94%B5%E8%AF%9D%E5%B7%B2%E5%81%9C%E6%9C%BA-%E8%BE%A3%E7%AC%94%E5%B0%8F%E5%A6%96.mp3?channelid=08&msisdn=dad03578-c13e-4ac3-beae-cf8ad1f4924a" type="audio/mpeg">
        您的浏览器不支持 audio 元素。
      </audio>
      &lt;!&ndash;<img src="../assets/img/default.png" alt="">
      <div>
        <img src="../assets/img/pause_icon.png" alt="">
        <img src="../assets/img/next_icon.png" alt="">
      </div>
      <p @click="close">
        <img v-if="show"  src="../assets/img/close_icon.png" alt="">
        <img v-else src="../assets/img/open_icon.png" alt="">
      </p>&ndash;&gt;
    </div>

</template>

<script>
  export default{
    name:"footer",
    data:function () {
      return{
        show:true,
      }
    },
    methods:{
      close:function () {
        var footer =document.getElementById("footer");
        if( footer.style.bottom=="0rem"){
          footer.style.bottom="-4.4rem";
         return this.show=false;
        }else{
          footer.style.bottom="0rem";
          return this.show=true;
        }
      }
    }
  }
</script>
<style>
  /*.footer {
    height: 5rem;
    background-color: #333333;
  }*/
  /*.footer{
    background-color: #333333;
    height: 4.4rem;
    position: fixed;
    bottom:0;
    width: 100%;
    transition: all 0.5s;
  }
  .footer>img{
    height: 4rem;
    padding: 0.2rem;
    float: left;
  }
  .footer>div{
    float: right;
  }
  .footer>div>img{
    height: 3rem;
    padding: 0.5rem;
    margin-top: 0.5rem;

  }
  .footer>p{
    position:absolute;
    background-color: #333333;
    bottom:4.4rem;
    left: 1rem;
    border-radius: 50%;
  }*/
</style>


-->
<template>
  <div id="audioView" class="audio-view" :class="{'audio_panel_hide':toggleHide}">
    <audio :src="audio.songUrl" autoplay id="audioPlay" @timeupdate="change()" @ended="next()" @error="next()"></audio>
    <div class="audio-panel">
      <img alt="" class="player-img" :src="audio.imgUrl" @click="showDetailPlayer()">
      <div class="player-status" @click="showDetailPlayer()">
        <p class="player-title ellipsis">{{audio.title}}</p>
        <p class="player-singer ellipsis">{{audio.singer}}</p>
      </div>
      <div class="player-controls">
        <img @click="play" src="../assets/img/pause_icon.png" alt="">
        <img src="../assets/img/next_icon.png" alt="">
      </div>

    </div>
    <p @click="close">
      <img v-if="show"  src="../assets/img/close_icon.png" alt="">
      <img v-else src="../assets/img/open_icon.png" alt="">
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Spinner } from 'mint-ui'

  export default {
    name: 'player',
    data(){
      return {
        toggleHide: false,
        show:true,
      }
    },
    computed: {
      ...mapGetters(['audio', 'audioLoadding', 'showPlayer', 'isPlay'])
  },
  methods: {
    togglePanel(){
      this.toggleHide = !this.toggleHide;
    },
    toggleStatus(){
      if (this.isPlay) {
        document.getElementById('audioPlay').pause();
      } else {
        document.getElementById('audioPlay').play();
      }
      this.$store.commit('isPlay', !this.isPlay);
    },
    showDetailPlayer(){
      if (this.showPlayer) {
        this.$store.commit('showDetailPlayer', true);
      }
    },
    change(){
      var time = document.getElementById('audioPlay').currentTime
      if (this.audio.currentFlag) {
        document.getElementById('audioPlay').currentTime = this.audio.currentLength;
        this.$store.commit('setCurrent', false);
      } else {
        this.$store.commit('setAudioTime', time);
      }
    },
    next(){
      this.$store.dispatch('next');
    },
    close:function () {
      var audioView =document.getElementById("audioView");
      if( audioView.style.bottom=="0rem"){
        audioView.style.bottom="-4.4rem";
        return this.show=false;
      }else{
        audioView.style.bottom="0rem";
        return this.show=true;
      }
    },
    //暂停与播放
     play(){
     var audio = document.getElementsByTagName("audio")[0];
     if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
  }
</script>
<style>
  .audio-view{
    background-color: #333333;
    height: 4.4rem;
    position: fixed;
    bottom:0;
    width: 100%;
    transition: all 0.5s;
  }
  .audio-panel img{
    height: 4rem;
    padding: 0.2rem;

  }
  .player-img,.player-status{
    float: left;
    color: white;
  }
  .player-controls{
    float: right;
    color:white;
    height: 4rem;
  }
  .audio-view>p{
    position:absolute;
    background-color: #333333;
    bottom:4.4rem;
    left: 1rem;
    border-radius: 50%;
  }
</style>

