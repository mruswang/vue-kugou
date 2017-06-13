<template>
    <div class="singer">
      <div>
        <mt-cell title="热门歌手" is-link></mt-cell>
      </div>
      <div>
        <mt-cell title="华语男歌手" is-link></mt-cell>
        <mt-cell title="华语女歌手" is-link></mt-cell>
        <mt-cell title="华语组合" is-link></mt-cell>
      </div>
      <div>
        <mt-cell title="日韩男歌手" is-link></mt-cell>
        <mt-cell title="日韩女歌手" is-link></mt-cell>
        <mt-cell title="日韩组合" is-link></mt-cell>
      </div>
      <div>
        <mt-cell title="欧美男歌手" is-link></mt-cell>
        <mt-cell title="欧美女歌手" is-link></mt-cell>
        <mt-cell title="欧美组合" is-link></mt-cell>
      </div>
    </div>
</template>

<script>

</script>
<style>
  .singer>div{
   padding: 10px;
    /*border: 1px solid;*/
  }
  .singer .mint-cell:last-child{
    background-image: none;
  }
  .singer .mint-cell-wrapper{
    padding: 10px 15px;
    background-image: none;
    border: 1px solid #D9D9D9;
    border-radius: 5px;
  }
</style>



