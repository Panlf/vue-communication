<template>
    <div>
        <h1>CallBack</h1>
        <h2>{{message}} ---- 父的信息</h2>
        <my-child :message="message" :changeMessageChild="changeMessage"></my-child>
    </div>
</template>

<script>
import MyChild from '@/components/FatherAndSon/CallBack/Child.vue'


export default {
    data(){
        return {
            message : '我是父的'
        }
    },
    components:{
        MyChild
    },
    methods:{
        changeMessage(){
            this.message = '更改-我是父的'
        }
    }
}
</script>

<style>

</style>