<template>
  <div class="homeContiner">
    <header class="header">
      <div class="logo-search">
        <a href="javascript:;" class="logo"></a>
        <div class="search">
          <i class="search-icon"></i>
          <span>搜索商品，共13018款好物</span>
        </div>
      </div>
      <div class="nav">
        <div class="navInner" ref="navInner">
          <ul class="navList">
            <li @click = 'sclectet("tuijian",$event)' class="first"><span :class="{active:isActive === 'tuijian'}">推荐</span></li>
            <li @click = 'sclectet("jujia",$event)'><span :class="{active:isActive === 'jujia'}">居家</span></li>
            <li  @click = 'sclectet("xiebao",$event)'><span :class="{active:isActive === 'xiebao'}">鞋包配饰</span></li>
            <li @click = 'sclectet("fuzhuang",$event)'><span :class="{active:isActive === 'fuzhuang'}">服装</span></li>
            <li @click = 'sclectet("dianqi",$event)'><span :class="{active:isActive === 'dianqi'}">电器</span></li>
            <li @click = 'sclectet("xihu",$event)'><span :class="{active:isActive === 'xihu'}">洗护</span></li>
            <li @click = 'sclectet("yinshi",$event)'><span :class="{active:isActive === 'yinshi'}">饮食</span></li>
            <li @click = 'sclectet("canchu",$event)'><span :class="{active:isActive === 'canchu'}">餐厨</span></li>
            <li @click = 'sclectet("yingtong",$event)'><span :class="{active:isActive === 'yingtong'}">婴童</span></li>
            <li @click = 'sclectet("wenti",$event)'><span :class="{active:isActive === 'wenti'}">文体</span></li>
            <li @click = 'sclectet("tese",$event)'><span :class="{active:isActive === 'tese'}">特色区</span></li>
          </ul>
        </div>
      </div>
    </header>
    <div class="scrollBox">
      <section class="section">
        <div class="swiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(index) in 5"  :key="index">
                <img src="../../assets/images/lunbo/1.jpeg">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="supports">
            <ul>
              <li>
                <a>
                  <i></i>
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="brand">
          <header class="brand-header">
            <a>
              <span>品牌制造商直供</span>
              <i class="right-icon"></i>
            </a>
          </header>
          <div class="brand-goods">
            <ul>
              <li class="goods left-goods">
                <a>
                  <div class="content-goods">
                    <h4></h4>
                    <div class="price">
                      <span class="price1"></span>
                      <span class="price2"></span>
                    </div>
                    <i class="shangxin-icon"></i>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65">
                </a>
              </li>
              <li class="goods">
                <a>
                  <div class="content-goods">
                    <h4></h4>
                    <div class="price">
                      <span class="price1"></span>
                      <span class="price2"></span>
                    </div>
                    <i class="shangxin-icon"></i>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65">
                </a>
              </li>
              <li class="goods left-goods">
                <a>
                  <div class="content-goods">
                    <h4></h4>
                    <div class="price">
                      <span class="price1"></span>
                      <span class="price2"></span>
                    </div>
                    <i class="shangxin-icon"></i>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65">
                </a>
              </li>
              <li class="goods">
                <a>
                  <div class="content-goods">
                    <h4></h4>
                    <div class="price">
                      <span class="price1"></span>
                      <span class="price2"></span>
                    </div>
                    <i class="shangxin-icon"></i>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="newItemList">
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
        </div>

      </section>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        isActive:'tuijian'
      }
    },
    mounted(){
      const navInner = this.$refs.navInner;
      const homeContiner = document.querySelector('.scrollBox');
      this.$nextTick(()=>{
        this.navInnerBS = new BScroll(navInner,{
          click: true,
          scrollX:true,
          scrollY:false
        });
        console.log(homeContiner)
        this.homeContinerBS = new BScroll(homeContiner,{
          click: true,
          scrollX:false,
          scrollY:true
        });
        new Swiper('.swiper-container', {
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true
        });
      })

    },
    methods:{
      sclectet(li,event){
        this.isActive = li;
        this.navInnerBS.scrollToElement(event.target,1000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homeContiner
    width 100%
    height 100%
    >.header
      position absolute
      top 0
      left 0
      width 100%
      height 148px
      background-color #fff
      display flex
      flex-direction column
      z-index 10
      >.logo-search
        display: flex
        flex-flow: row nowrap
        align-items: center
        padding: .21333rem .4rem
        >.logo
          width: 1.84rem;
          height: .53333rem;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
          display: inline-block;
          margin-right: .26667rem;
          background-size: cover;
          background-position: center
        >.search
          display: flex;
          flex-grow: 1;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          height: .74667rem;
          font-size: .37333rem;
          background-color: #ededed;
          border-radius: .10667rem;
          >.search-icon
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .37333rem;
            height: .37333rem;
            margin-right: .13333rem;
          >span
            color: #666
      >.nav
        width 100%
        display flex
        flex-direction column
        flex 1
        >.navInner
          width 100%
          display: flex;
          >.navList
            display: flex;
            flex-shrink: 0;
            padding: 0 .4rem;
            background: #fff;
            >li
              margin-left: .64rem;
              position relative
              &.first
                margin-left 0
              span
                display: block;
                padding: 0 .21333rem;
                line-height: .8rem;
                font-size: .37333rem;
                color: #333;
                text-align: center;
                vertical-align middle
                &.active::after
                  content: ' ';
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  width: 90%;
                  height: .05333rem;
                  background-color: #b4282d;
    >.scrollBox
      width 100%
      height 100%
      overflow hidden
      >.section
        width 100%
        height 100%
        overflow hidden
        padding-top 148px
        .swiper
          width 100%
          overflow hidden
          margin-bottom: .26667rem;
          background-color: #fff
          >.swiper-container
            height 4.93333rem
            >.swiper-wrapper
              img
                width 100%
                height 100%
            >.swiper-pagination
              >.swiper-pagination-bullet
                width: .53333rem;
                height: .03333rem;
                display: inline-block;
                background: #fff;
                opacity: .4;
                padding: 0;
                border: 0;
                font-size: 100%;
                font-weight: normal;
                vertical-align: baseline
                &.swiper-pagination-bullet-active
                  opacity: 1;
          >.supports
            background-color #fff
            >ul
              width 100%
              height: .96rem;
              padding: 0 .4rem;
              display: -webkit-box;
              display: -webkit-flex;
              display: -moz-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-flow: row nowrap;
              -moz-flex-flow: row nowrap;
              -ms-flex-flow: row nowrap;
              flex-flow: row nowrap;
              -webkit-box-align: center;
              -ms-flex-align: center;
              -webkit-align-items: center;
              -moz-align-items: center;
              align-items: center;
              zoom: 1;


        .brand
          background-color #fff
          .brand-header
            display flex
            flex-flow: row nowrap;
            align-items center
            justify-content: center;
            height: 1.46667rem;
            font-size: .42667rem;
            >a
              display flex
              flex-flow row nowrap
              color #333
              align-items center
              .right-icon
                display: inline-block;
                vertical-align: middle;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                width: .4rem;
                height: .4rem;
                margin-left .13333rem
          .brand-goods
            padding-bottom: .10667rem
            >ul
              position: relative;
              margin: 0 .21333rem;
              height: 6.24rem;
              overflow: hidden;
              >.goods
                display: inline-block;
                float left
                position: relative;
                margin-bottom: .10667rem;
                width: 4.73333rem;
                height: 3.14667rem;
                overflow: hidden;
                background-color: #f4f4f4;
                &.left-goods
                  margin-right .10667rem
                >a
                  width 100%
                  height 100%
                  >.content-goods
                    position: absolute;
                    left: 0;
                    top: 0;
                    padding: .26667rem 0 0 .26667rem;
                    width: 100%;
                    z-index: 4;
                    >h4
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                      color: #333;
                      font-size: .37333rem;
                      line-height: .45333rem;
                      margin-bottom: .08rem;
                    >.price
                      >.price1
                        color: #333;
                        font-size: .37333rem;
                        line-height: .45333rem;
                      >.price2
                        color: #333;
                        font-size: .32rem;
                        line-height: .45333rem;

                    >.shangxin-icon
                      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png);
                      height: .42667rem
                      width: .85333rem;
                      display: inline-block;
                      vertical-align: middle;
                      background-repeat: no-repeat;
                      background-size: 100% 100%;


        .newItemList
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

</style>
