<template>
  <div>
      <h1>Child</h1>
      <h2>{{message}}</h2>
      <h3>{{number}}</h3>
  </div>
</template>

<script>
export default {
    data(){
        return {
            message: this.$parent.parentMessage,
            number:10
        }
    }
}
</script>

<style>

</style>