<template>
  <div class="detil">
    <div class="banner">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1519262384,3498226215&fm=27&gp=0.jpg" />
    </div>
    <div class="playerbox">
      <div class="player">
        <video src="https://vip888.kuyun99.com/20181001/vcOJX67E/index.m3u8"></video>
      </div>
      <div class="list clearfix">
        <div class="listli" v-for="n in 20" :key="n">
          <a>第{{n+1}}集</a>
        </div>
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
export default {
  name: 'detilComponent'
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
