<template>
  <div class="header-nav">
    <header-logo></header-logo>
    <!--<ul>
      <router-link to="/">新歌</router-link>
      <router-link to="/rank">排行</router-link>
      <router-link to="/plist">歌单</router-link>
      <router-link to="/singer">歌手</router-link>
      <router-link to="/ringtone">彩铃</router-link>
    </ul>-->
    <mt-navbar id="hedernav" v-model="headNav" >
      <mt-tab-item class="active" id="head-nav1" @click.native="goRouter(1)">新歌</mt-tab-item>
      <mt-tab-item id="head-nav2" @click.native="goRouter(2)">排行</mt-tab-item>
      <mt-tab-item id="head-nav3" @click.native="goRouter(3)">歌单</mt-tab-item>
      <mt-tab-item id="head-nav4" @click.native="goRouter(4)">歌手</mt-tab-item>
      <mt-tab-item id="head-nav5" @click.native="goRouter(5)">彩铃</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
  import { Navbar, TabItem } from 'mint-ui';

  import headerLogo from './headerlogo.vue'
  //import{ mapState } from 'vuex'
  export default {
    name: 'header-nav',
    data:function () {
      return{

      }
    },

    components: {headerLogo,Navbar, TabItem},
   /* computed: {
      ...mapState(['headNav'])
  },*/
    methods: {
      goRouter(index){
        //this.$store.commit('setHeadNav', index);
        switch (index) {
          case 1:
            this.$router.push({path: '/'});
            break;
          case 2:
            this.$router.push({path: 'rank'});
            break;
          case 3:
            this.$router.push({path: 'plist'});
            break;
          case 4:
            this.$router.push({path: 'singer'});
            break;
          case 5:
            this.$router.push({path: 'ringtone'});
            break;
        }
      }
  }

  }
</script>
<style>
  .active{
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
  }
</style>



