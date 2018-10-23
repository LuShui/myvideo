<template>
  <div id="box">
    <div class="itembox clearfix">
      <div @click="gotofunc()" class="item" v-for="(json, key) in list" :key="key">
        <div class="itemicon">
          <van-icon class="icon" color="#1296db" size="30px" :name="json.icon" />
        </div>
        <div class="itemtitle">
          <span>{{json.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'morecateComponent',
  data () {
    return {
      list: [{
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }, {
        name: '电影',
        icon: 'send-gift'
      }]
    }
  },
  methods: {
    gotofunc () {
      this.$router.push({
        path: 'cate',
        query: {
          'type': 3
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#box{
  .itembox{
    .item{
      width: 25%;
      height: 180px;
      float: left;
      .itemicon{
        overflow: hidden;
        text-align: center;
        .icon{
          margin-top: 30px;
        }
      }
      .itemtitle{
        span{
          display: block;
          text-align: center;
          height: 40px;
          line-height: 40px;
          font-size: 28px;
          color: #1296db;
        }
      }
    }
  }
}
</style>
