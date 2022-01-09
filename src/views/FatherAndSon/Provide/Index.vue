<template>
  <div>
      <h1>ProvideAndInject</h1>
      <h2>Parent</h2>
      <hr>
      <my-child></my-child>
  </div>
</template>

<script>
import MyChild from '@/components/FatherAndSon/Inject/Child.vue'
export default {

    provide:{
        message:'我是父组件的信息'
    },
    components:{
       MyChild 
    }
}
</script>

<style>

</style>