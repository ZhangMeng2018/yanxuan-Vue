import {GETHOMEDATA,GETSHIWUDATA,GETCATEGORYDATA} from './mutationTypes'





export default {
  [GETHOMEDATA](state,{home_data}){
    state.home_data = home_data
  },
  [GETSHIWUDATA](state,{shiwu_data}){
    state.shiwu_data = shiwu_data
  },
  [GETCATEGORYDATA](state,{category_data}){
    state.category_data = category_data
  }
}
