<template>
  <div id="box">
    <headComponent />
    <swipeComponent :banner="banner" />
    <cateComponent />
    <adComponent />
    <listComponent @moresoure="getmoresoure" :hotlist="hotlist" />
  </div>
</template>
<script>
// 轮播图
import swipeComponent from './banner/swipeComponent'
// 分类
import cateComponent from './cate/cateComponent'
// 列表
import listComponent from './session/listComponent'
// 广告
import adComponent from './adbanner/adComponent'
// 头部组件
import headComponent from './header/headComponent'
export default {
  name: 'homeComponent',
  data () {
    return {
      banner: [],
      hotlist: []
    }
  },
  created () {
    this.loadsoure()
  },
  methods: {
    loadsoure () {
      this.$http.post(this.URL.VIDEO_BANN_URI).then((res) => {
        this.banner = res.data.banner
        this.hotlist = this.hotlist.concat(res.data.list)
      })
    },
    getmoresoure (list) {
      this.hotlist = this.hotlist.concat(list)
    }
  },
  components: {
    swipeComponent,
    cateComponent,
    listComponent,
    adComponent,
    headComponent
  }
}
</script>
<style lang="scss" scoped>
$themecolor: #1296db;
</style>
