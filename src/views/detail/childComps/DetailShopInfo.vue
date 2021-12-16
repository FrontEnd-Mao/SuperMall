<template>
  <div class="shop-info" v-if="Object.keys(shop).lenght !== 0">
      <div class="top">
          <img :src="shop.shopLogo" alt="店铺头像">
          <span class="shop-name">{{shop.name}}</span>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">
              <div class="info-sells">
                  <div class="sells-count">
                      {{shop.cSells}}
                  </div>
                  <div class="sells-text">总销量</div>
              </div>
              <div class="info-goods">
                  <div class="goods-count">
                      {{shop.cGoods}}
                  </div>
                  <div class="goods-text">全部宝贝</div>
              </div>
          </div>
          <div class="shop-middle-item shop-middle-right">
              <table>
                  <tr v-for="(item, index) in shop.score" :key="index">
                      <td>{{item.name}}</td>
                      <td class="score"  :class="{score_better : item.isBetter}">{{item.score}}</td>
                      <td class="better" :class="{better_more : item.isBetter}">
                          <span>{{item.isBetter ? '高' : '低'}}</span>
                      </td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shop-bottom">
          <button>进店逛逛</button>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style>
    .shop-info {
        width: 97%;
        margin-left: 1.5%;
        margin-top: 10px;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
    }
    .top {
       padding-top: 5px;
       margin-left: 8px;
    }
    .top img{
        width: 40px;
        height: 40px;
        border-radius: 50px;
        display:inline-block;
        vertical-align: middle;
    }
    .shop-name {
        display: inline-block;
        box-sizing: border-box;
        vertical-align: middle;
        padding-left: 5px;
    }
    .shop-middle {
        display: flex;
        margin-left: 8px;
        padding-top: 20px;
        text-align: center;
    }
    .shop-middle-item {
        flex: 1;
        text-align: center;
    }
    .shop-middle-left {
        display: flex;
    }
    .sells-text{
        font-size: 12px;
        padding-top: 5px;
    }
    .goods-text {
        font-size: 12px;
        padding-top: 5px;
    }
    .info-sells {
        flex: 1;
    }
    .shop-middle-right table {
        font-size: 12px;
        border-spacing: 10px 10px;
        border-left: 1px solid #585353a4;
        position: relative;
        left: 20px;
        bottom: 20px;
    }
    .score {
        color: #339933;
        
    }
    .better {
        color: #fff;
         background-color: #339933;
    }
    .score_better {
        color: #CC3333;
   
    }
    .better_more {
        color: #fff;
        background-color: #CC3333;
    }
    .shop-bottom {
       text-align: center;
    }
    .shop-bottom button {
        width: 150px;
        border-radius: 10px;
        padding: 5px;
        color: #fff;
        background-color: var(--color-tint);
        border: 0;
        font-size: 15px;
    }
</style>