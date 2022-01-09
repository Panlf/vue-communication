<template>
    <div>
        <h1>Child</h1>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
export default {
    inject: ['message']
}
</script>

<style>

</style>