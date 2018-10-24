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
        name: '动作',
        icon: 'send-gift',
        cate: 6
      }, {
        name: '爱情',
        icon: 'send-gift',
        cate: 8
      }, {
        name: '喜剧',
        icon: 'send-gift',
        cate: 7
      }, {
        name: '科幻',
        icon: 'send-gift',
        cate: 9
      }, {
        name: '剧情',
        icon: 'send-gift',
        cate: 11
      }, {
        name: '战争',
        icon: 'send-gift',
        cate: 12
      }, {
        name: '动画',
        icon: 'send-gift',
        cate: 24
      }, {
        name: '恐怖',
        icon: 'send-gift',
        cate: 10
      }, {
        name: '微电影',
        icon: 'send-gift',
        cate: 25
      }, {
        name: '国产剧',
        icon: 'send-gift',
        cate: 13
      }, {
        name: '香港剧',
        icon: 'send-gift',
        cate: 20
      }, {
        name: '台湾剧',
        icon: 'send-gift',
        cate: 21
      }, {
        name: '韩国剧',
        icon: 'send-gift',
        cate: 23
      }, {
        name: '日本剧',
        icon: 'send-gift',
        cate: 22
      }, {
        name: '欧美剧',
        icon: 'send-gift',
        cate: 16
      }, {
        name: '海外剧',
        icon: 'send-gift',
        cate: 26
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
