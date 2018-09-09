<template>
  <a class="surprise" v-if="surpise.picList">
    <div class="imgWarp">
      <div class="left-img" :style="{background:`url(${surpise.picList[0]})`}"></div>
      <div class="right-img">
        <div class="up" :style="{background:`url(${surpise.picList[1]})`}"></div>
        <div class="down" :style="{background:`url(${surpise.picList[2]})`}"></div>
      </div>
    </div>
    <div class="desc">{{surpise.content}}</div>
  </a>
</template>

<script>
  export default {
    props:{
      surpise:Object
    },
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .surprise
    display: block;
    padding: .32rem;
    margin-bottom: .4rem;
    background-color: #fff;
    color: #333
    box-sizing border-box
    >.imgWarp
      overflow: hidden
      >.left-img
        float: left;
        width: 6.13333rem;
        height: 4.8rem;
        margin-right: .05333rem
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat
      >.right-img
        float: right;
        width: 2.37333rem
        >.up
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat
          margin-bottom: .05333rem
          height: 2.37333rem;
        >.down
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat
          height: 2.37333rem
    >.desc
      background-color: #fff;
      font-size: .37333rem;
      padding-top: .38667rem;
      padding-bottom: .37333rem;
      line-height: 1.2;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden
</style>
