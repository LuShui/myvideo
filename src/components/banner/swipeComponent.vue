<template>
  <div class="swipebox">
    <van-swipe class="vanswipe" :autoplay="6000">
      <van-swipe-item class="swipeitem" v-for="(json, index) in banner" :key="index">
        <img @click="gotofunc(json)"  class="swipeimage" :src="json.vod_pic" />
        <span class="vodname">{{json.vod_name}}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props: ['banner'],
  name: 'swipeComponent',
  methods: {
    gotofunc (json) {
      this.$router.push({
        path: 'detil',
        query: {
          'vod_id': json.vod_id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.swipebox{
  height: 340px;
  .vanswipe{
    height: 100%;
    .swipeitem{
      height: 100%;
      position: relative;
      .vodname{
        position: absolute;
        display: block;
        bottom: 0;
        right: 0;
        left: 0;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        text-align: right;
        color: #e3e3e3;
        background-color: rgba(1, 1, 1, 0.75);
        padding: 0 15px;
      }
      .swipeimage{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
