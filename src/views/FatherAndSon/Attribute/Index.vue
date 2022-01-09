<template>
  <div>
      <h1>Attribute</h1>
      <h2>Parent</h2>
      <button @click="changeNumber">按钮</button>
      <my-child></my-child>
  </div>
</template>

<script>
import MyChild from '@/components/FatherAndSon/Attribute/Child.vue'

export default {
    data(){
        return {
            parentMessage: '我是父的属性'
        }
    },
    components:{
        MyChild
    },
    methods:{
        changeNumber(){
            this.$children[0].number = 30
        }
    }

}
</script>

<style>

</style>