<template>
  <div>
    <h1>Parent</h1>
    <h2>Age : {{age}}</h2>
    <button @click="changeAge">按钮</button>
    <hr>

    <my-child ref="childContent"></my-child>
  </div>
</template>

<script>
import MyChild from '@/components/FatherAndSon/Ref/Child.vue'

export default {
    data(){
        return {
            age: 2
        }
    },
    created(){
        //ref在dom树渲染完成以后才会生成，而created()期是挂载的过程，dom树还没渲染完成，所以找不到ref,返回undefind.
        this.$nextTick(()=>{
            //在created()中加入this.$nextTick(()=>{}),在里面调用ref,此方法会在渲染完成后执行，可以解决渲染异步问题
           this.age=this.$refs.childContent.age
        })
    },
    methods: {
        changeAge(){
            this.$refs.childContent.changeAge()
            this.age = this.$refs.childContent.age
        }
    },
    components:{
        MyChild
    }
}
</script>

<style>

</style>