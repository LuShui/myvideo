<template>
  <div class="listli" @click="changesoure">
    <a class="btn" :class="{playsteat: json.isplay}">第{{this.json.name}}集</a>
  </div>
</template>
<script>
export default {
  props: ['json'],
  name: 'itemplay',
  methods: {
    changesoure () {
      this.$emit('chageParent', this.json)
    }
  }
}
</script>
<style lang="scss" scoped>
.btn{
  display: block;
  margin: 10px auto;
  height: 50px;
  width: 75%;
  line-height: 50px;
  text-align: center;
  color: #6f6f6f;
}
.playsteat{
  background-color: #1296db;
  color: white;
  border-radius: 5px;
}
</style>
