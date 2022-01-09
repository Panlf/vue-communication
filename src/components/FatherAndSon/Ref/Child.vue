<template>
    <div>
        <h1>Child</h1>
        <h2>Age : {{age}}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            age: 20
        }
    },
    methods:{
        changeAge(){
            this.age = 50
        }
    }
}
</script>

<style>

</style>