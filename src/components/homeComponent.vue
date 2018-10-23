<template>
  <div id="box">
    <headComponent />
    <swipeComponent />
    <cateComponent />
    <adComponent />
    <listComponent />
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
