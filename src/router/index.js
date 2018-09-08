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
        showFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/shiwu',
      component:Shiwu,
      meta: {
        showFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/category',
      component:Category,
      meta: {
        showFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/shopcar',
      component:ShopCar,
      meta: {
        showFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/personnelcenter',
      component:PersonnelCenter,
      meta: {
        showFooter: true  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/interlayer',
      component:Interlayer,
      meta: {
        showFooter: false  // 标识FooterGuide组件是否显示
      },
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
