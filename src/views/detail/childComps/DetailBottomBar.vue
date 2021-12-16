<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
        <div>
            <i class="icon server"><img src="~assets/images/deatil_tabbar/server.png" alt=""></i>
            <span class="text">客服</span>
        </div>
        <div>
            <i class="icon shop"><img src="~assets/images/deatil_tabbar/shop.png" alt=""></i>
            <span class="text">店铺</span>
        </div>
        <div  @click="collection">
            <i class="icon collection" >
                <img v-if="!currentIndex" src="~assets/images/deatil_tabbar/collection.png" alt="">
                <img v-else src="~assets/images/deatil_tabbar/al_collection.png" alt="">
            </i>
            <span class="text">收藏</span>
        </div>
    </div>
    <div class="bar-item bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex:false
        }
    },
    methods: {
        collection() {
            this.currentIndex = !this.currentIndex;
            console.log(this.currentIndex);
        },
        addToCart() {
            
            this.$emit('addCart');
        }
    },
}
</script>

<style>
    .bottom-bar {
        width: 100%;
        height: 49px;
        background-color: #fff;
        position: fixed;
        bottom: 0px;
        left: 0;
        right: 0;
        display: flex;
        
    }
    .bar-item {
        flex: 1;
    }
    .bar-left {
        float: left;
        display: flex;
    }
    .bar-left > div {
        flex: 1;
        text-align: center;
    }
    .bar-left .text {
        font-size: 13px;
        display: block;
        padding-bottom: 5px;
    }
    .bar-left .icon {
        display: block;
        width: 33px;
        height: 32px;
        margin: auto ;
        padding-top: 5px;
        
    }
   .icon img {
       width: 22px;
       height: 22px;
   }


    .bar-right {
        font-size: 15px;
        line-height: 58px;
        display: flex;
    }
    .bar-right > div {
        flex: 1;
        text-align: center;;
    }
    .bar-right .cart {
        background: #ffe817;
        color: rgb(90, 90, 90);
    }
    .bar-right .buy {
        color: #fff;
        background: #f69;
    }

</style>