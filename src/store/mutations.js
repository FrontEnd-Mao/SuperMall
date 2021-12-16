import {ADD_COUNTER, ADD_TO_CART} from './mutations-type'
export default {
    //购物车物品数量增加
    [ADD_COUNTER](state, payload) {
        payload.count++;
    },
    //添加物品到购物车
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload);
    }
}