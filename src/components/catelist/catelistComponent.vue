<template>
  <div class="list">
    <van-list class="clearfix vlist" v-model="loading" :finished="finished" @load="onLoad">
      <itemcell class="cellitem" v-for="(item, index) in list" :key="index" :json="item">
        <!-- <div class="itembox">
          <div class="imgbox"></div>
          <div class="titlebox">我的妹妹不可能这么可爱</div>
        </div> -->
      </itemcell>
    </van-list>
  </div>
</template>
<script>
import itemcell from './itemcell'
export default {
  name: 'catelistComponent',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1
    }
  },
  methods: {
    onLoad () {
      let obj = {
        'cate': this.$route.query.type,
        'page': this.page,
        'type': this.$route.query.gtype
      }
      this.page++
      this.$http.post(this.URL.VIDEO_CATE_URI, this.$qs.stringify(obj)).then((res) => {
        let data = res.data
        if (data.code === 0) {
          this.finished = true
          this.loading = true
        } else {
          this.list = this.list.concat(data.data)
          this.loading = false
        }
      })
    }
  },
  components: {
    itemcell
  }
}
</script>
<style lang="scss" scoped>
.list{
  .vlist{
    margin: 20px;
    .cellitem:nth-last-of-type(2n){
      margin-left: 10px;
    }
    .cellitem:nth-last-of-type(2n+1){
      margin-right: 10px;
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
          background-image: url('http://pic.xiaomingming.org/FileUpload/2679.jpg');
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
