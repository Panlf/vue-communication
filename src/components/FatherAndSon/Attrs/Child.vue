<template>
  <div>
      <h1>Child</h1>
      <button @click="$listeners.changeName">按钮</button>
      <grand-child v-bind="$attrs"></grand-child>
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue'

export default {
  components:{
    GrandChild
  }
}
</script>

<style>

</style>