<template>
    <div class="plist">
      <mt-cell v-for="(plist,index) in plists" :title="plist.title" :label="plist.countPlay" is-link>
        <img slot="icon" :src="plist.imgUrl" width="60px" height="60px">
      </mt-cell>
    </div>
</template>

<script>
  import { cell } from 'mint-ui'
  import list_plist from '../jsons/list_plist'
  export default{
    name:'plist',
    data:function () {
      return{
        plists:[]
      }
    },
    created(){
      this.get();
    },
    components:{
    },
    methods: {
      get(){
        this.parseData(list_plist);
      },
      parseData(data){
        this.plists = data;
      }
    }
  }

</script>
<style>
  .plist .mint-cell-label:before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url(../assets/img/icon_music.png) no-repeat center;
    background-size: 100%;
  }
  .plist .mint-cell-label{
    position: absolute;
    left: 80px;
    top: 35px;
    height: 20px;
    margin-top: 15px;
  }
  .plist .mint-cell-wrapper{
    padding: 10px;
    border-top: 1px solid #D9D9D9;
    background-image: none;
  }
  .plist .mint-cell-text{
    position: absolute;
    left: 80px;
    top: 23px;
    padding-right: 40px;
    height: 16px;
    overflow: hidden;
    line-height: 16px;
  }
</style>



