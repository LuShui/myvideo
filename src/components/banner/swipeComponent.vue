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
      console.log(json)
      this.$router.push({
        name: 'detilComponent',
        params: {
          'type_id': json.type_id,
          'vod_actor': json.vod_actor,
          'vod_area': json.vod_area,
          'vod_blurb': json.vod_blurb,
          'vod_id': json.vod_id,
          'vod_name': json.vod_name,
          'vod_pic': json.vod_pic,
          'vod_play_url': json.vod_play_url,
          'vod_remarks': json.vod_remarks,
          'vod_tag': json.vod_tag
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
