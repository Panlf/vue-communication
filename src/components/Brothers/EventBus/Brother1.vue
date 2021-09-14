<template>
  <div>
      兄弟组件1
      <h2>{{ ageData }}</h2>
      <button @click="addAge">增加Age</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
    props: ['age'],
    data(){
        return {
            ageData:this.age
        }
    },
    methods:{
        addAge(){
            this.ageData += 1
            eventBus.$emit('add-age',1)
        }
    }
}
</script>

<style>

</style>