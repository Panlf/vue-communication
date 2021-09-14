<template>
  <div>
     兄弟组件2
     <h2>{{ ageData }}</h2>
  </div>
</template>

<script>

import { eventBus } from '@/main.js'

export default {
    props : ['age'],
    data(){
        return {
            ageData:this.age
        }
    },
    created(){
        eventBus.$on('add-age',(num)=>{
            this.ageData += num
        })
    }
}
</script>

<style>

</style>