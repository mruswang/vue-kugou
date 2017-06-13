<template>
    <div class="rank">
      <mt-cell v-for="(rank,index) in ranks" :title="rank.title" is-link>
        <img slot="icon" :src="rank.imgUrl" width="60px" height="60px">
      </mt-cell>
    </div>
</template>

<script>
  import { cell } from 'mint-ui'
  import rank_list from '../jsons/rank_list'
  export default{
    name:'rank',
    data:function () {
      return{
        ranks:[]
      }
    },
    created(){
      this.get();
    },
    components:{
    },
    methods: {
      get(){
        this.parseData(rank_list);
      },
      parseData(data){
        this.ranks = data;
      }
    }
  }

</script>
<style>
  .rank .mint-cell-wrapper{
    padding: 10px 15px;
   /*padding-top: 0.5rem;*/
    border-top: 1px solid #D9D9D9;
    background-image: none;
  }
</style>

