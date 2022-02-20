<template>
  <div>
    <h1>我是a</h1>
    <router-link :to="{name: 'b'}">跳转B</router-link>
  </div>
</template>

<script>
export default {
  name: "a",
  mounted() {
    console.log('aaaaaaaaaa')
  }
}
</script>

<style scoped>
h1 {
  color: #FAB640;
}
</style>
