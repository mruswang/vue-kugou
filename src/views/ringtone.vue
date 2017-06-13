<template>
    <div class="ringtone">
      <mt-cell v-for="(ringtone,index) in ringtones" :title="ringtone.title" :label="ringtone.desp">
        <img src="../assets/img/order-ring.png" width="30px" alt="">
      </mt-cell>
    </div>
</template>

<script>
  import { cell } from 'mint-ui'
  import list_rings from '../jsons/list_rings'
  export default{
    name:'ringtone',
    data:function () {
      return{
        ringtones:[]
      }

    },
    created(){
      this.get();
    },
    methods: {
      get(){
        this.parseData(list_rings);
      },
      parseData(data){
        this.ringtones = data;
      }
    }
  }
</script>
<style>
  .ringtone .mint-cell-wrapper{
    padding: 10px 15px;
    /*padding-top: 0.5rem;*/
    border-top: 1px solid #D9D9D9;
    background-image: none;
  }
</style>



