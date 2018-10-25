<template>
  <div id="cate">
    <div class="webbox clearfix">
      <div class="cateitem">
        <a class="abutton" @click="gotofunc(1)">
          <img src="@/assets/move_icon.svg" class="icon"/>
          <span class="title">电影</span>
        </a>
      </div>
      <div class="cateitem">
        <a class="abutton" @click="gotofunc(2)">
          <img src="@/assets/dongman_icon.svg" class="icon"/>
          <span class="title">动漫</span>
        </a>
      </div>
      <div class="cateitem">
        <a class="abutton" @click="gotofunc(3)">
          <img src="@/assets/dianshiju_icon.svg" class="icon"/>
          <span class="title">连续剧</span>
        </a>
      </div>
      <div class="cateitem">
        <a class="abutton" @click="gotofunc(4)">
          <img src="@/assets/more_icon.svg" class="icon"/>
          <span class="title">全部分类</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cateComponent',
  methods: {
    gotofunc (type) {
      switch (type) {
        case 1:
          this.$router.push({
            path: 'cate',
            query: {
              'type': '1',
              'gtype': 1
            }
          })
          break
        case 2:
          this.$router.push({
            path: 'cate',
            query: {
              'type': '4',
              'gtype': 0
            }
          })
          break
        case 3:
          this.$router.push({
            path: 'cate',
            query: {
              'type': '2',
              'gtype': 1
            }
          })
          break
        case 4:
          this.$router.push({
            path: 'more'
          })
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$boxheight: 125px;
#cate{
  width: 100%;
  height: $boxheight;
  .webbox{
    height: $boxheight;
    .cateitem{
      width: 25%;
      height: $boxheight;
      float: left;
      .abutton{
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .icon{
          display: block;
          width: 100%;
          height: 50px;
          margin-top: 20px;
        }
        .title{
          display: block;
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #333333;
          font-size: 26px;
        }
      }
    }
  }
}
</style>
