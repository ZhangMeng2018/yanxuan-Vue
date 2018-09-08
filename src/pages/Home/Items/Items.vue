<template>
  <div class="newItemWarp">
    <header class="header">
      <a>
        <span>新品首发</span>
        <div>
                <span>
                  <span>查看全部</span>
                  <i class="right-icon"></i>
                </span>
        </div>
      </a>
    </header>
    <div :class="className" class="newItemList">
      <ul>
        <li v-for="index in 5" :key="index">
          <a>
            <div class="img-warp">
              <img src="http://yanxuan.nosdn.127.net/621362a91fcab80a55eb4685649ccb5f.png?imageView&quality=65&thumbnail=330x330">
            </div>
            <div class="item-name">
                        <span>
                          网易有道翻译王 2.0pro
                        </span>
            </div>
            <div class="item-desc">
              随身离线翻译神器 预售送100元礼品卡
            </div>
            <div class="item-price">￥1688</div>
          </a>
        </li>
        <li class="item-more">
          <a>
            <span>查看全部</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      className:String
    },
    data() {
      return {}
    },
    mounted(){
      const newItemList =document.querySelector('.'+this.className);
      console.log(this.className)
      console.log(this)
       new BScroll(newItemList,{
        click: true,
        scrollX:true,
        scrollY:false
      });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .newItemWarp
    margin-bottom: .26667rem;
    background-color: #fff;
    >.header
      background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png);
      background-size: 10rem 3.46667rem;
      height: 3.46667rem;
      margin-bottom: .42667rem;
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      align-items: center
      justify-content: center;
      font-size: .42667rem;
      >a
        display: block;
        text-align: center;
        font-size: .48rem;
        color: #8BA0B6;
        flex-flow: row nowrap;
        align-items: center
        >div
          position: relative;
          margin: .21333rem auto 0;
          width: 3.2rem;
          height: .74667rem;
          font-size: .37333rem;
          line-height: .74667rem;
          background: #D8E5F1;
          i
            position: absolute;
            top: .22667rem;
            background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png);
            background-size: .13333rem .29333rem;
            display: inline-block;
            height: .29333rem;
            width: .13333rem;
            margin-left: .08rem;

    >.newItemList
      height: 6.4rem
      background-color: #fff;
      display flex
      >ul
        display flex
        >li
          margin-left: .4rem;
          width: 3.73333rem
          height 100%
          float: left;
          position: relative
          overflow: hidden
          background-color #fff
          &.item-more
            display: block;
            border: .10667rem solid #F4F4F4;
            width: 3.73333rem;
            height: 3.73333rem;
            margin: 0 .4rem;
            line-height: 3.73333rem;
            text-align: center;
            >a>span
              font-size: .37333rem;
              color: #666
          >a
            width 100%
            >.img-warp
              width 100%
              background-color #f4f4f4
              margin-bottom: .26667rem
              >img
                width 100%
                display block


            >.item-name
              margin-top: .13333rem;
              padding: 0 .13333rem;
              line-height: .64rem;
              text-align: left;
              font-size: .37333rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              color: #333;

            >.item-desc
              display: block;
              margin-bottom: .18667rem;
              font-size: .32rem;
              color: #7f7f7f;
              line-height: .4rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              padding: 0 .13333rem
            >.item-price
              padding: 0 .13333rem;
              font-size: .37333rem
              line-height: 1;
              text-align: left;
              color: #b4282d;
</style>
