<template>
  <div class="header">
    <div class="icon">
      <img src="@/assets/water.svg" />
    </div>
    <div class="searchbox" @click="gotosearch">
      <form>
        <input readonly class="search" placeholder="请输入需要搜索的内容" />
      </form>
    </div>
    <div @click="mianzefunc" class="mianze clearfix">
      <img src="@/assets/norule.svg" />
      <span>免责声明</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headComponent',
  methods: {
    mianzefunc () {
      this.$router.push({
        path: 'mianze'
      })
    },
    gotosearch () {
      this.$router.push({
        path: 'search'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
  background-color: #f2f2f2;
  display: -webkit-box;
  height: 88px;
  .icon{
    img{
      width: 58px;
      height: 88px;
      display: block;
    }
  }
  .searchbox{
    -webkit-box-flex: 1;
    .search{
      display: block;
      width: 90%;
      margin: 15px auto;
      height: 58px;
      line-height: 58px;
      background-color: white;
      border-radius: 10px;
      text-indent: 10px;
      outline: none;
      border: none;
    }
  }
  .mianze{
    margin-right: 10px;
    img,span{
      display: inline-block;
      vertical-align: top;
    }
    img{
      width: 34px;
      height: 88px;
    }
    span{
      line-height: 88px;
      height: 88px;
      font-size: 28px;
      color: #1296db;
    }
  }
}
</style>
