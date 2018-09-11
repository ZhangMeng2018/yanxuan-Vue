import VueRouter from "vue-router"
import Vue from 'vue'

import Home from '../pages/Home/Home.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Category from '../pages/Category/Category.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import PersonnelCenter from '../pages/PersonnelCenter/PersonnelCenter.vue'
import Interlayer from '../pages/Interlayer/Interlayer.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      meta: {
        ishowHeader:false,// 标识HeaderGuide组件是否显示
        ishowFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/shiwu',
      component:Shiwu,
      meta: {
        ishowHeader:true,// 标识HeaderGuide组件是否显示
        ishowFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/category',
      component:Category,
      meta: {
        ishowHeader:false,// 标识HeaderGuide组件是否显示
        ishowFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/shopcar',
      component:ShopCar,
      meta: {
        ishowHeader:false,// 标识HeaderGuide组件是否显示
        ishowFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/personnelcenter',
      component:PersonnelCenter,
      meta: {
        ishowHeader:true,// 标识HeaderGuide组件是否显示
        ishowFooter: false  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/interlayer',
      component:Interlayer,
      meta: {
        ishowFooter: false  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
