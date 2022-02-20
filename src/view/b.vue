<template>
<h1>我是B</h1>
</template>

<script>
export default {
  name: "b",
  mounted() {
    console.log('-----')
  }
}
</script>

<style scoped>
h1 {
  color: pink;
  margin-left: 50px;
}
</style>
