import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);

const state = {
    cartList : []
}
const store = new Vuex.Store({
    state,
    mutations,
    actions
})
export default store;