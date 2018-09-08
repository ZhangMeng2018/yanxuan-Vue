import {reqHomeData,reqCategoryData,reqShiWu} from '../api'

import {GETHOMEDATA} from './mutationTypes'




export default {
async  getHomeData({commit},cb){
  const result = await reqHomeData();
  if(result.code===0){
    const home_data = result.data;
    commit(GETHOMEDATA,{home_data});
    cb && cb()
  }
  }
}
