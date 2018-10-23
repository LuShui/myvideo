<template>
  <div class="list">
    <div class="headsession clearfix">
      <i></i>
      <span>最近更新</span>
    </div>
    <van-list class="clearfix vlist" v-model="loading" :finished="finished" @load="onLoad">
      <cellitem class="cellitem" v-for="item in hotlist" :json="item" :key="item.vod_id"></cellitem>
    </van-list>
  </div>
</template>
<script>
import cellitem from './cellitem'
export default {
  props: ['hotlist'],
  name: 'listComponent',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 0
    }
  },
  methods: {
    onLoad () {
      this.page++
      let obj = {
        'page': this.page
      }
      this.$http.post(this.URL.VIDEO_HOTS_URI, this.$qs.stringify(obj)).then((res) => {
        let data = res.data
        if (data.code === 0) {
          this.finished = true
          this.loading = true
        } else {
          this.$emit('moresoure', data.data)
          this.loading = false
        }
      })
    }
  },
  components: {
    cellitem
  }
}
</script>
<style lang="scss" scoped>
.list{
  .headsession{
    $boxheight: 50px;
    height: $boxheight;
    i{
      display: block;
      width: 10px;
      height: 100%;
      float: left;
      background-color: #1296db;
      margin-left: 20px;
    }
    span{
      display: block;
      height: $boxheight;
      line-height: $boxheight;
      float: left;
      font-size: 30px;
      margin-left: 15px;
    }
  }
  .vlist{
    margin: 20px;
    .cellitem:nth-last-of-type(2n){
      float: left;
    }
    .cellitem:nth-last-of-type(2n+1){
      float: right;
    }
    .cellitem{
      display: block;
      width: calc(50% - 10px);
      margin-bottom: 20px;
      height: 350px;
      float: left;
      overflow: hidden;
      padding: 0;
      .itembox{
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        .imgbox{
          display: block;
          height: 350px;
          background-position: center top;
          background-repeat: no-repeat;
          background-size: cover;
          overflow: hidden;
        }
        .titlebox{
          height: 80px;
          line-height: 80px;
          text-align: center;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;background-color: rgba(1, 1, 1, 0.7);
          color: white;
          font-size: 30px;
        }
      }
    }
  }
}
</style>
