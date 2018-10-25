<template>
  <div id="box">
    <div class="itembox clearfix">
      <div class="item" v-for="(json, key) in list" :key="key" @click="gotofunc(json)">
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
        icon: 'send-gift',
        cate: 1,
        gtype: 1
      }, {
        name: '连续剧',
        icon: 'send-gift',
        cate: 2,
        gtype: 1
      }, {
        name: '综艺',
        icon: 'send-gift',
        cate: 3,
        gtype: 0
      }, {
        name: '动漫',
        icon: 'send-gift',
        cate: 4,
        gtype: 0
      }, {
        name: '动作片',
        icon: 'send-gift',
        cate: 6,
        gtype: 0
      }, {
        name: '喜剧片',
        icon: 'send-gift',
        cate: 7,
        gtype: 0
      }, {
        name: '爱情片',
        icon: 'send-gift',
        cate: 8,
        gtype: 0
      }, {
        name: '科幻片',
        icon: 'send-gift',
        cate: 9,
        gtype: 0
      }, {
        name: '恐怖片',
        icon: 'send-gift',
        cate: 10,
        gtype: 0
      }, {
        name: '剧情片',
        icon: 'send-gift',
        cate: 11,
        gtype: 0
      }, {
        name: '战争片',
        icon: 'send-gift',
        cate: 12,
        gtype: 0
      }, {
        name: '国产剧',
        icon: 'send-gift',
        cate: 13,
        gtype: 0
      }, {
        name: '港台剧',
        icon: 'send-gift',
        cate: 14,
        gtype: 0
      }, {
        name: '日韩剧',
        icon: 'send-gift',
        cate: 15,
        gtype: 0
      }, {
        name: '欧美剧',
        icon: 'send-gift',
        cate: 16,
        gtype: 0
      }]
    }
  },
  methods: {
    gotofunc (json) {
      console.log(json)
      this.$router.push({
        path: 'cate',
        query: {
          'type': json.cate,
          'gtype': json.gtype
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
