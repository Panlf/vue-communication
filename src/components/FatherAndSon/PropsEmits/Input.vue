<template>
    <div>
        <input type="text" v-model="title" />
        <button @click="add">添加</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title : ''
        }
    },
    methods : {
        add(){
            this.$emit('sonAdd',this.title)
        }
    }
}
</script>

