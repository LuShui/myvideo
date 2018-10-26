<template>
  <div class="detil">
    <div class="playerbox">
      <div class="player">
        <video ref="player" class="video-source" id="videoPlay" controls="controls" x5-playsinline="" playsinline="" webkit-playsinline="" x-webkit-airplay="allow"></video>
      </div>
      <div class="videoinfo">
        <div class="videoname">{{soure.vod_name}}</div>
        <div class="videoarae clearfix">
          <span>地区:{{soure.vod_area}}</span>
          <span>年份:{{soure.vod_year}}</span>
        </div>
      </div>
      <div class="list clearfix">
        <itemplay @chageParent="childClick" class="listli" v-for="json in videolist" :key="json.index" :json="json"></itemplay>
      </div>
      <div class="content" v-html="soure.vod_content"></div>
    </div>
  </div>
</template>
<script>
import itemplay from './itemplay'
export default {
  name: 'detilComponent',
  data () {
    return {
      videolist: [],
      player: '',
      soure: {}
    }
  },
  mounted () {
    this.player = this.$refs.player
    let obj = {
      'vod_id': this.$route.query.vod_id
    }
    this.$http.post(this.URL.VIDEO_DETIL_URI, this.$qs.stringify(obj)).then((res) => {
      let data = res.data
      if (data.code === 1) {
        this.soure = data.data
        this.parsesoure(data.data)
      }
    })
  },
  methods: {
    parsesoure (json) {
      let array = json.vod_play_url.split('#')
      let videolist = []
      array.forEach((element, i) => {
        let arr = element.split('$')
        let json = {
          name: i + 1,
          play: arr[1],
          isplay: false,
          index: i
        }
        videolist.push(json)
      })
      this.videolist = videolist
      if (this.videolist.length) {
        this.startplay(this.videolist[0])
      }
    },
    startplay (json) {
      this.player.src = json.play
      this.sourechange(json)
      this.player.play()
    },
    childClick (json) {
      this.player.src = json.play
      this.sourechange(json)
      this.player.load()
    },
    sourechange (json) {
      let arr = this.videolist
      arr.forEach((item) => {
        item.isplay = false
      })
      json.isplay = true
      arr.splice(json.index, 1, json)
      this.videolist = arr
    }
  },
  components: {
    itemplay
  }
}
</script>
<style lang="scss" scoped>
.detil{
  .playerbox{
    .player{
      video{
        display: block;
        background-color: black;
        height: 350px;
        width: 100%;
      }
    }
    .videoinfo{
      padding: 15px;
      .videoname{
        height: 100px;
        line-height: 100px;
        font-size: 40px;
        font-weight: bold;
      }
      .videoarae{
        span{
          display: block;
          width: 50%;
          float: left;
          height: 40px;
          line-height: 40px;
          font-size: 28px;
        }
      }
    }
    .list{
      max-height: 300px;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      .listli{
        float: left;
        width: 25%;
        height: 70px;
        line-height: 70px;
        text-align: center;
        box-sizing: border-box;
        a{
          display: inline-block;
          height: 50px;
          line-height: 50px;
          width: 85%;
          border: 1px solid #999999;
          border-radius: 20px;
        }
      }
    }
  }
  .banner{
    height: 200px;
    overflow: hidden;
    img{
      display: block;
      object-fit: cover;
    }
  }
  .content{
    padding: 15px;
    font-size: 28px;
    line-height: 40px;
    border-top: 1px solid #e6e6e6;
    color: #333333;
  }
}
</style>
