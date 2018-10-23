<template>
  <div class="swipebox">
    <van-swipe class="vanswipe" :autoplay="6000">
      <van-swipe-item class="swipeitem" v-for="(json, index) in imageList" :key="index">
        <img class="swipeimage" :src="json" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: 'swipeComponent',
  data () {
    return {
      imageList: ['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1519262384,3498226215&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1992558718,3012771222&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2106190320,4175870403&fm=27&gp=0.jpg']
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
