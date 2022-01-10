<template>
  <div>
      <h1>Parent</h1>
      <p>name:{{ name }}</p>
      <hr>
      <my-child1 :name="name" @ChildOneClick="handleParentClick"></my-child1>
      <hr>
      <my-child2 :name="name"></my-child2>
  </div>
</template>

<script>
import MyChild1 from '@/components/Brothers/Emit/Child1.vue'
import MyChild2 from '@/components/Brothers/Emit/Child2.vue'

export default {
    data(){
        return {
            name:'Ame'
        }
    },
    methods:{
        handleParentClick(name){
            this.name = name
        }
    },
    components:{
        MyChild1,
        MyChild2
    }
}
</script>

<style>

</style>