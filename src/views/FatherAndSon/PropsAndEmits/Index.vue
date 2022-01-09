<template>
  <div>
      <h1>props and emits</h1>
      <my-input @sonAdd="fatherAdd" />
      <my-list :childList="list" />
  </div>
</template>

<script>

import MyInput from '@/components/FatherAndSon/PropsEmits/Input.vue'
import MyList from '@/components/FatherAndSon/PropsEmits/List.vue'

export default {
    data(){
      return {
        list : [
          {
            id:1,
            title:'标题1'
          },
          {
            id:2,
            title:'标题2'
          }
        ]
      }
    },
    methods :{
      fatherAdd(title){
        this.list.push({
          id:Math.random(),
          title:title
        })
      }
    },
    components :{
        MyInput,
        MyList
    }
}
</script>

<style>

</style>