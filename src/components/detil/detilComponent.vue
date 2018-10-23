<template>
  <div class="detil">
    <div class="banner">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1519262384,3498226215&fm=27&gp=0.jpg" />
    </div>
    <div class="playerbox">
      <div class="player">
        <video ref="player"></video>
      </div>
      <div class="list clearfix">
        <itemplay class="listli" v-for="json in videolist" :key="json.index" :json="json"></itemplay>
      </div>
    </div>
    <div class="banner">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2106190320,4175870403&fm=27&gp=0.jpg" />
    </div>
    <div class="banner">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1519262384,3498226215&fm=27&gp=0.jpg" />
    </div>
  </div>
</template>
<script>
import itemplay from './itemplay'
export default {
  name: 'detilComponent',
  data () {
    return {
      videolist: []
    }
  },
  mounted () {
    let jsonstr = sessionStorage.getItem('detiljson')
    if (jsonstr) {
      this.videolist = JSON.parse(jsonstr)
    } else {
      let json = this.$route.params
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
      sessionStorage.setItem('detiljson', JSON.stringify(videolist))
    }

    if (this.videolist.length) {
      this.startplay(this.videolist[0])
    }
  },
  methods: {
    startplay (json) {
      let player = this.$refs.player
      player.src = json.play
      player.play()
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
    .list{
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
}
</style>
