<template>
  <div>
      <h1>Child</h1>
      <h2>{{message}} -- 子的信息</h2>
      <button @click="changeMessageChild">更改</button>
  </div>
</template>

<script>
export default {
    props :{
        message: String,
        changeMessageChild:String
    }
}
</script>

<style>

</style>