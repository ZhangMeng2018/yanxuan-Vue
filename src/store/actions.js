import {reqHomeData,reqCategoryData,reqShiWu} from '../api'

import {GETHOMEDATA,GETSHIWUDATA,GETCATEGORYDATA} from './mutationTypes'




export default {
  async getHomeData({commit},cb){
    const result = await reqHomeData();
    if(result.code===0){
      const home_data = result.data;
      commit(GETHOMEDATA,{home_data});
      cb && cb()
    }
  },
  async getShiwuData({commit},cb){
    const result = await reqShiWu();
    if(result.code===0){
      const shiwu_data = result.data;
      commit(GETSHIWUDATA,{shiwu_data});
      cb && cb()
    }
  },
  async getCategoryData({commit},cb){
    const result = await reqCategoryData();
    if(result.code===0){
      const category_data = result.data;
      commit(GETCATEGORYDATA,{category_data});
      cb && cb()
    }
  },
}
