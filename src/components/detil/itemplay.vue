<template>
  <div class="listli">
    <a>第{{this.json.name}}集</a>
  </div>
</template>
<script>
export default {
  props: ['json'],
  name: 'itemplay',
  created () {
    console.log(this.json)
  }
}
</script>
<style lang="scss" scoped>

</style>
