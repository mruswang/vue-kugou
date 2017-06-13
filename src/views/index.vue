<template>
    <div class="index">
      <mt-swipe :auto="5000">
        <mt-swipe-item>
          <img src="../assets/banner1.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/banner2.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/banner3.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/banner4.jpg">
        </mt-swipe-item>
      </mt-swipe>
      <div>
        <mt-cell v-for="(item,index) in songList" :title="item.title" @click.native="playAudio(index)">
          <img src="../assets/img/download_icon.png" alt="" width="20" height="20">
        </mt-cell>
      </div>

    </div>
</template>

<script>

import { Swipe, SwipeItem,Cell } from 'mint-ui';
  import list_index from '../jsons/list_index'
  import {INIT,PLAY_AUDIO} from '../mixins'//mixins混合
  export default{
    mixins:[INIT,PLAY_AUDIO],
    methods: {
      getList(){
        this.parseList(list_index);
      },
      parseList(data){
        this.songList = data;
      }
      },

  }
</script>
<style>
 .mint-swipe {
    height: 8rem !important;
  }

  .mint-swipe-indicator {
    width: 12px !important;
    height: 12px !important;
  }

  .mint-swipe-indicators {
    bottom: 5px !important;
  }
 ul{
  padding: 0;
 }
 ul>li{
    padding-left:0.54rem;
    list-style: none;
    border-bottom:1px solid gray;
     height: 1.8rem;
   line-height: 1.8rem;
  }
 ul>li>img{

 }
 .index .mint-cell-wrapper{
   padding: 10px 15px;

   border-top: 1px solid #D9D9D9;
   background-image: none;

 }
</style>

