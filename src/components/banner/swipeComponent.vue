<template>
  <div class="swipebox">
    <van-swipe class="vanswipe" :autoplay="6000">
      <van-swipe-item class="swipeitem" v-for="(json, index) in banner" :key="index">
        <img @click="gotofunc(json)"  class="swipeimage" :src="json.vod_pic" />
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
