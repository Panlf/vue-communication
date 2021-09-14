<template>
    <div>
        <ul>
            <li v-for="item in childList" :key="item.id">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props :{
        childList: Array
    },
    data(){
        return {
            
        }
    }
}
</script>