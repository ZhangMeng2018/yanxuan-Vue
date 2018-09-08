import {GETHOMEDATA} from './mutationTypes'





export default {
  [GETHOMEDATA](state,{home_data}){
    state.home_data = home_data
  }
}
