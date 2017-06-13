<template>
  <div id="example">
    456
    {{message}}
    <Hello></Hello>
    <abc></abc>
  </div>

</template>

<script>
  import abc from './123.vue'
  import Hello from './Hello.vue'
   export default({
    name: 'example',
    data:function () {
      return{
        message: '123'
      }
    },
     components:{
       Hello,abc
     }
  })


</script>




