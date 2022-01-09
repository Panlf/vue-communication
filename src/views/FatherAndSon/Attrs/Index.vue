<template>
  <div>
      <h1>Parent</h1>
      <p>姓名：{{name}}</p>
      <p>年龄：{{age}}</p>
      <hr>
      <my-child :name="name" :age="age" @changeName="changeParentName"></my-child>
  </div>
</template>

<script>
import MyChild from '@/components/FatherAndSon/Attrs/Child.vue'

export default {
    components: {
        MyChild
    },
    data(){
        return {
            name: 'Ame',
            age: 24
        }
    },
    methods:{
        changeParentName(){
            this.name='MayBe'
        }
    }
}
</script>

<style>

</style>