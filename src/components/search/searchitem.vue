<template>
  <van-cell @click="gotofunc" class="cellitem" >
    <div class="itembox">
      <div :style="bgimg" class="imgbox"></div>
      <div class="titlebox">{{json.vod_name}}</div>
    </div>
  </van-cell>
</template>
<script>
export default {
  props: ['json'],
  name: 'searchitem',
  methods: {
    gotofunc () {
      this.$router.push({
        path: 'detil',
        query: {
          'vod_id': this.json.vod_id
        }
      })
    }
  },
  computed: {
    bgimg () {
      return {
        backgroundImage: 'url("' + this.json.vod_pic + '")'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.cellitem{
  display: block;
  width: calc(50% - 10px);
  margin-bottom: 20px;
  height: 350px;
  float: left;
  overflow: hidden;
  padding: 0;
  .itembox{
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    .imgbox{
      display: block;
      height: 350px;
      background-position: center top;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      background-color: #f2f2f2;
    }
    .titlebox{
      height: 80px;
      line-height: 80px;
      text-align: center;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;background-color: rgba(1, 1, 1, 0.7);
      color: white;
      font-size: 30px;
    }
  }
}
</style>
