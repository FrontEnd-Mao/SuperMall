import {ADD_COUNTER, ADD_TO_CART} from './mutations-type'
export default {
    //添加商品到购物车
    addCart(context,payload) {
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
        
        if(oldProduct) {
            context.commit(ADD_COUNTER, oldProduct)
        }
        else {
            context.commit(ADD_TO_CART, payload)
            
        }
       
    },
}