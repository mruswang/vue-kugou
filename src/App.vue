
<template>
  <div id="app">
    <K-Head></K-Head>

    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>


    <K-Foot></K-Foot>
  </div>
</template>


<script>
  import KHead from './components/header.vue'
  import KFoot from './components/footer.vue'
  export default {
    name: 'app',
    components: {
      KHead,KFoot
    }
  }
</script>
<style>
  img {
    border: 0 none;
    width: auto\9;
    height: auto;
    max-width: 100%;
    vertical-align: top;
    -ms-interpolation-mode: bicubic;
  }
  .clearfix{*zoom:1; }
  .clearfix:after{
    content:".";
    height:0;
    display:block;
    visibility:hidden;
    clear:both;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: all 0.1s;
  }
  .component-fade-leave-active{
    transform: translateX(0);
  }
  .component-fade-enter {
    transform: translateX(100%);
  }
</style>

