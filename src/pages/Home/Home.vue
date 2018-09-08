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
        <Items v-for="index in 2" :key="index" :className = '"abc"+index'/>
        <div class="limitTime">
          <a>
            <div class="limitTime-warp">
              <div class="left-item">
                <div class="title">严选限时购</div>
                <div class="countdown">
                  <span class="hours time" >{{hour}}</span>
                  <span class="colon" >:</span>
                  <span class="mins time" >{{mins}}</span>
                  <span class="colon" >:</span>
                  <span class="secs time" >{{secs}}</span>
                </div>
                <div class="next-title">
                  <span>下一场</span>
                  <span>14：00</span>
                  <span>开始</span>
                </div>
              </div>
              <div class="right-item">
                <div class="imgWarp">
                  <img src="http://yanxuan.nosdn.127.net/36ebfc73b1f28d3c99981726788b8f84.png?imageView&quality=85&thumbnail=330x330" alt="">
                </div>
                <div class="price">
                  <div class="nowPrice">
                    <span class="rmb">￥</span>
                    <span>183</span>
                  </div>
                  <div class="originPrice">
                    <span class="rmb">￥</span>
                    <span>229</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="fuli">
          <a>
          </a>
        </div>
        <div class="topicList">
          <header class="topic-title">
            <a>
              <span>专题精选</span>
              <i class="icon-right"></i>
            </a>
          </header>
          <div class="topic-items">
            <div class="topicScrollBox">
              <ul>
                <li v-for="index in 3" :key="index">
                  <a href="javascript:;">
                    <img src="https://yanxuan.nosdn.127.net/544235ba401c70389b9fadcd134bc1b9.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
                  </a>
                  <div class="item-price">
                    <h4>吃得到果肉的, 才是真凤梨酥</h4>
                    <span>
                      38元起
                    </span>
                  </div>
                  <div class="item-info">47%凤梨果肉</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CateListContainer/>
        <CateListContainer/>
        <CateListContainer/>
        <div class="downLoad-copyright">
          <div>
            <div class="downLoad">
              <a href="javascript:;">下载APP</a>
              <a href="javascript:;">电脑版</a>
            </div>
            <p class="copyright">
              <span>网易公司版权所有 © 1997-2018</span>
              <span>食品经营许可证：JY13301080111719</span>
            </p>
          </div>
        </div>
      </section>
    </div>
    <i class="gotoTop" @click = 'gotoTop' v-show="isShowGotoTop"></i>
    <div class="newsWarp" v-if="isShowNews">
      <div class="mask"></div>
      <i class="close-button" @click = 'isShowNews = false'></i>
      <div class="detail-wapr">
        <div class="content">
          <div class="xinren">
            <span class="title">新人专享礼</span>
          </div>
          <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
          <div class="newItem">
            <div class="imgWarp">
              <img src="http://yanxuan.nosdn.127.net/15c8d56c8399c66338ca7a08bbb9ef9e.jpg?imageView&quality=85&thumbnail=232y232"">
            </div>
            <div class="text">
              <div class="name">埃及进口长绒棉毛巾</div>
              <div class="manu">
                <span>Ralph Lauren</span>
              </div>
              <div class="price">
                <span class="nowPrice">￥32.00</span>
                <span class="originPrice">￥199.00</span>
              </div>
            </div>
          </div>
          <div class="actCouponBtn">
            <span>领券立减¥10.00</span>
          </div>
          <a href="javascript:;" class="checkMore">
            查看更多特惠商品
          </a>
        </div>
      </div>
    </div>
    <a href="javascript:;" class="newsEntrance" v-show="!isShowNews">
      <i class="gift-icon"></i>
    </a>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  import Items from './Items/Items.vue'
  import CateListContainer from './CateListContainer/CateListContainer.vue'
  export default {
    data() {
      return {
        isActive:'tuijian',
        countdownTime:1000*60*60*2,
        isShowGotoTop:0,
        isShowNews:true
      }
    },
    computed:{
      ...mapState(['home_data']),
      hour(){
        const hour = Math.floor(this.countdownTime/(1000*60*60));
        return hour>10? hour : '0'+hour
      },
      mins(){
        const mins = Math.floor(this.countdownTime/(1000*60)%60)
        return mins>10? mins : '0'+mins
      },
      secs(){
        const secs = Math.floor(this.countdownTime/1000%60);
        return secs>10? secs : '0'+secs
      }
    },
    mounted(){
      const timer = setInterval(()=>{
        this.countdownTime -= 100
      },100);
      this.$store.dispatch('getHomeData',() =>{
        this.$nextTick(()=>{
          this._initScroll();
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
        });
      });
    },
    methods:{
      sclectet(li,event){
        this.isActive = li;
        this.navInnerBS.scrollToElement(event.target,1000)
      },
      gotoTop(){
        this.homeContinerBS.scrollTo(0,0,1000)
      },
      _initScroll(){
        const navInner = this.$refs.navInner;
        const homeContiner = document.querySelector('.scrollBox');
        const topicScrollBox = document.querySelector('.topicScrollBox');
        this.navInnerBS = new BScroll(navInner,{
          click: true,
          scrollX:true,
          scrollY:false
        });
        this.homeContinerBS = new BScroll(homeContiner,{
          click: true,
          scrollX:false,
          scrollY:true,
          probeType: 1,
        });
        this.homeContinerBS.on('scroll',({y}) =>{
          this.isShowGotoTop = Math.abs(y) >500 ? 1 : 0
        });
        this.homeContinerBS.on('scrollEnd',({y}) =>{
          this.isShowGotoTop = Math.abs(y) >500 ? 1 : 0
        });
        this.topicScrollBox = new BScroll(topicScrollBox,{
          click: true,
          scrollX:true,
          scrollY:false
        });
      }
    },
    components:{
      Items,
      CateListContainer
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


        .limitTime
          .limitTime-warp
            padding: .4rem .53333rem .4rem .74667rem;
            margin-bottom: .26667rem;
            height: 5.06667rem;
            background: #fff;
            display: -moz-flex;
            display: flex;
            >.left-item
              flex 1
              display flex
              flex-direction: column;
              padding-top: 1.06667rem;
              >.title
                font-size: .48rem;
                line-height: .48rem;
                margin-bottom: .32rem;
                color: #333;
                letter-spacing: .16rem;
              >.countdown
                display inline
                overflow hidden
                >span
                  float left
                  vertical-align middle
                  line-height: .74667rem;
                  display: inline-block;
                  text-align: center;
                >.time
                  width: .82667rem;
                  height: .74667rem;
                  font-size: .42667rem;
                  color: #fff;
                  border-radius: .05333rem;
                  background: #444;
                >.colon
                  color: #333;
                  font-size: .4rem;
                  width: .26667rem;
                  font-weight: 700;
              >.next-title
                margin-top: .53333rem;
                color: #333;
                font-size: .32rem;
                line-height: .32rem;
                height: .32rem;
            >.right-item
              background: #fff;
              width: 4.26667rem;
              height: 4.26667rem;
              position: relative;
              >.imgWarp
                width 100%
                >img
                  width: 100%;
                  height: 100%;

              >.price
                height: 1.28rem;
                width: 1.28rem;
                position: absolute;
                right: .26667rem;
                bottom: .48rem;
                background-color: rgba(244,143,24,.95);
                border-radius: 100%;
                color: #fff;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                >div
                  font-size: .37333rem;
                  line-height: .37333rem;
                  height: .37333rem;
                  >.rmb
                    font-size .32rem
                    margin-right -5px

        .fuli
          width: 10rem;
          height: 4rem;
          margin-bottom: .26667rem
          >a
            width 100%
            height 100%
            display block
            background-image: url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        .topicList
          width 100%
          font-size: .42667rem
          background-color #fff
          >.topic-title
            width 100%
            height: 1.46667rem
            display flex
            color: #333
            align-items center
            justify-content center
            .icon-right
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .4rem;
              height: .4rem;

          >.topic-items
            width 100%
            height 453px
            box-sizing border-box
            padding: 0 .4rem .48rem;
            overflow: hidden
            >.topicScrollBox
              width 100%
              height 100%
              display flex
              >ul
                display flex
                flex 1
                flex-shrink: 0
                >li
                  display flex
                  flex-flow: row nowrap
                  flex-direction column
                  margin-right: 20.8444px;
                  >a
                    display: block;
                    width: 7.66667rem;
                    height: 4.29333rem;
                    margin-bottom: .21333rem;
                    border-radius: 8px;
                    overflow: hidden
                    >img
                      display block
                  >.item-price
                    height: .54667rem;
                    margin-bottom: .02667rem;
                    zoom: 1;
                    >h4
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      width: 5.46667rem;
                      float: left;
                      font-size: .37333rem;
                    >span
                      float: right;
                      font-size: .37333rem;
                      color: #b4282d;
                  >.item-info
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 7.66667rem;
                    font-size: .32rem;
                    color: #7F7F7F;
        .downLoad-copyright
          border-top: 1px solid rgba(0,0,0,.15);
          background-color: #414141
          >div
            text-align: center;
            padding: .72rem .26667rem .37333rem
            width: 10rem;
            margin-right: auto;
            margin-left: auto;
            box-sizing border-box
            >.downLoad
              width 90%
              margin-right: auto;
              margin-left: auto;
              display flex
              align-items center
              justify-content center
              >a
                width: 2.29333rem;
                font-size: .32rem;
                color: #fff;
                margin-right: .33333rem
                margin-left: .33333rem
                height: .82667rem;
                line-height: .82667rem
                border: 1px solid #999
                text-align: center;
                background-color: transparent;
                border-radius: 4px;
                overflow: hidden;

            >.copyright
              box-sizing: border-box
              margin-top: .48rem;
              margin-bottom: .48rem;
              display flex
              flex-direction column
              align-items center
              justify-content center
              >span
                font-size: .32rem;
                line-height: .42667rem;
                color: #999;


    >.gotoTop
      position: absolute;
      right: .30667rem;
      bottom: 1.6rem;
      vertical-align: middle;
      width: 1.09333rem;
      height: 1.09333rem;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png);
      background-size: 1.09333rem 1.09333rem;
      z-index: 2;

    >.newsWarp
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      >.mask
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
      >.close-button
        position: fixed;
        right: .4rem;
        top: .8rem;
        z-index: 2;
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: .85333rem;
        height: .85333rem;
      >.detail-wapr
        transform: translate(-50%,-50%);
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        >.content
          width: 8.4rem;
          height: 9.22667rem;
          background-color: #fff;
          border-radius: .21333rem;
          padding: .4rem .32rem;
          >.xinren
            font-size: .53333rem;
            text-align: center;
            >.title
              display: inline-block;
              position: relative;
              font-weight: 700;
              &::before,&::after
                width: .53333rem;
                height: .05333rem;
                background-color: #333;
                position: absolute;
                top: .37333rem;
                content: '';
              &::before
                left: -.74667rem;
              &::after
                left: 2.88rem;

          >.subTitle
            margin-top: .9rem;
            font-size: .32rem;
            text-align: center;
          >.newItem
            margin-top: .66667rem;
            background-color: #f4f4f4;
            border-radius: .05333rem;
            height: 3.09333rem;
            width: 100%;
            display: flex;
            >.imgWarp
              >img
                width: 3.09333rem;
                height: 3.09333rem;
            >.text
              margin-left: .10667rem;
              flex: 1;
              padding: .57333rem 0;
              >.name
                font-size: .37333rem;
                width: 3.73333rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              >.manu
                margin-top: .2rem;
                >span
                  border: 1px solid #7f7f7f;
                  border-radius: .05333rem;
                  padding: 0 .10667rem;
                  height: .48rem;
                  line-height: .48rem;
                  font-size: 24px
              >.price
                margin-top: .26667rem;
                font-size: .37333rem;
                >.nowPrice
                  color: #b4282d
                >.originPrice
                  color: #999;
                  display: inline-block;
                  margin-left: .10667rem;
                  text-decoration: line-through;



          >.actCouponBtn
            height: 1.17333rem;
            background-color: #b4282d;
            color: #fff;
            font-size: .37333rem;
            margin-top: .53333rem;
            border-radius: .05333rem;
            text-align: center;
            line-height: 1.17333rem;
          >.checkMore
            height: 1.17333rem;
            border: 1px solid #7F7F7F;
            border-radius: .05333rem;
            text-align: center;
            line-height: 1.17333rem;
            font-size: .37333rem;
            margin-top: .32rem;
            display: block;
            color: #333;
    >.newsEntrance
      position: fixed;
      right: 0;
      bottom: 3.2rem;
      display: block;
      z-index: 10;
      animation: .5s moveLeft
      >.gift-icon
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-d7cf1023e9.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1.49333rem;
        height: 1.06667rem;
  @keyframes moveLeft{
    from {transform:translateX(100%)}
    to {transform:translateX(0)}
  }
</style>
