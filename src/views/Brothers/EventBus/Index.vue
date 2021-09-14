<template>
    <div>
        <brother-1 :age="age" />
        <brother-2 :age="age" />
    </div>
</template>

<script>

import Brother1 from '@/components/Brothers/EventBus/Brother1.vue'
import Brother2 from '@/components/Brothers/EventBus/Brother2.vue'


export default {
    data(){
        return {
            age:20
        }
    },
    components : {
        Brother1,
        Brother2
    }
}
</script>

<style>

</style>