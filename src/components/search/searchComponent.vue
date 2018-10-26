<template>
  <div id="box">
    <form>
      <div class="searchbox clearfix">
        <i></i>
        <input v-focus v-model="searchstr" ref="input" @keypress="valuefinsh" type="search" class="search" placeholder="请输入需要搜索的内容" />
      </div>
    </form>
    <div style="height:55px"></div>
    <ul class="list">
      <searchitem class="cellitem" v-for="(item, index) in searchlist" :json="item" :key="index"></searchitem>
    </ul>
    <div v-if="hasnosoure" class="nosoure">
      <img src="@/assets/nosoure.svg" />
      <span class="nosouretit">没找到呢！！！</span>
    </div>
  </div>
</template>
<script>
import searchitem from './searchitem'
export default {
  name: 'searchComponent',
  data () {
    return {
      searchstr: '',
      searchlist: [],
      hasnosoure: false
    }
  },
  methods: {
    valuefinsh (e) {
      var keycode = e.keyCode
      if (keycode === 13) {
        e.preventDefault()
        let ele = this.$refs.input
        ele.blur()
        if (this.searchstr.length !== 0) {
          this.startSearch(this.searchstr)
          this.searchstr = ''
        }
      }
    },
    startSearch (str) {
      let obj = {
        'search': str
      }
      this.$http.post(this.URL.VIDEO_SEARCH_URI, this.$qs.stringify(obj)).then((res) => {
        let data = res.data
        if (data.code === 1) {
          this.hasnosoure = false
          this.searchlist = data.data
        } else {
          this.hasnosoure = true
        }
      })
    }
  },
  components: {
    searchitem
  },
  directives: {
    focus: function (el) {
      el.focus()
    }
  }
}
</script>
<style lang="scss" scoped>
#box{
  .nosoure{
    img{
      display: block;
      height: 200px;
      width: 200px;
      margin:  0 auto;
    }
    .nosouretit{
      display: block;
      color: #bfbfbf;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
  }
  form{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 80px;
    z-index: 10;
  }
  .searchbox{
    height: 60px;
    display: -webkit-box;
    padding: 20px 20px;
    background-color: #F4F4F4;
    i,input{
      display: block;
      height: 60px;
    }
    input{
      outline: none;
      border: none;
      background-color: transparent;
      text-indent: 10px;
      -webkit-box-flex: 1;
      line-height: 60px;
      height: 60px;
      font-size: 30px;
      text-indent: 20px;
    }
    i{
      height: 60px;
      width: 40px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 35px 35px;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAD2ElEQVRIibXWS6id1RUH8N/a58R77gU1iAGTKAitxoJPohar0EZoSoWiA+tQi9iJEI0IxZmvODKa5FKdOJAWHYhC8YGi1kyK1DpogzOjiA4SWhrMleg95/Se8y0H5/Xdm3tObgr+YcG3Hnv999rf2o/Ih88xRq8QI6VCoRSqPhH0OnOare0Df3RlHgOZxDzZoXToz9FIsmk9rG9djetwN3ZrtHZIjYE54Vt8hNfxEpY2kE/MqPQnlGfw640kwilpv9J5Wn+uPavSMiXBfbL8cwrhf/AFTqyxnys8Llsf47JZs1uP9FG8ILSGegqvyrxddBZwEX6ELRoulfkgPq2Nv1KJD3HVRkl/j8cmah5Ryk7chTfQXhP/FRZt7lw5JB/5t8jyNraeifQKLNb0dyx3b8a/ps24hh4WZewivhnaLqZ6cX3SzEHL98uzkyXNI5Y7d2J5A4R1/EPknegP9V/hjtNJB7jGpGl6Mu/5PwhH+KuI5yZq9YhGT12KqlCV341j0mv45Kypqk1UDXpNeo196A49PzX4dWMUm7uIX44tUV4RTRYWBlIhp+2sqfiv9MFY68VuvTCSJlq1mfTF8rvrpol1rQOcnKOsrLW+S9w2GBvX1B1NS62LGB1tjjt9W6yPyPHxPAVHBycl2L6atF8taIxHtmXLTCSiGDDOxHe174XVpNlcqiXYqjfj/zVqRMnsNbfFuNQ4WXcUFy7/22R7nIttszKdjpwm145DwpdiOMcYXG0VPsYvwKb+HQ50n1+Vd+9mojN9RavC4jK/HerbFoj+b2or8ffVlS7NI96cmOJeZ1i3DeAGYlRpl03vsclImhpN+LP+yj7MSzs91Lqb6k+qJnHGhlmLhqieremv4et6wKhrTkiHxta0aMbVNBXbW2xr7cMtQ8uKzCdVXXUp2qdon2Kl8xQ+GwafJ8v7uOEsKANPCI/UbE9ZfdcOAvP+mjZ3zlWy8Tfy/KGli/209ovO0riRxvs0kFRlp1I9g5/Xsr3nWOc2kxtnKinZuIl8CxdMHLkk4i2V9/GlKN9SnUdcT96Om53efJ+J2IVjVmqu5vqkRPVjGS/jxrWzPAN6OILrh/pREbdaiWN10mnHz+c2d26S7jP5z7PQl/kXWe10sHOjiNEL5HKZh605cKZVyvldTrY41Al7538mcrfMq0VcosqiRFs6KvMj/cabGv3jJIf+B2Hv/CFyz7jiXtmF45obe2wnPhzKRpEOth+0d96Q+HLN6rBeuRXHz/p2PmviiD8O9R2a1WFs/SFJB8QH2g8wfjPtoP+HH5p0QHywvYc8SHwiy4HvAWfdWQzDmQm7AAAAAElFTkSuQmCC');
    }
  }
  .list{
    margin: 20px;
    .cellitem:nth-last-of-type(2n){
      float: right;
    }
    .cellitem:nth-last-of-type(2n+1){
      float: left;
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
