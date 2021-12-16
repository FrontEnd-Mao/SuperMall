<template>
  <div class="detail" >
      <data-nav-bar @titleClick="titleClick"></data-nav-bar>
      <detail-swiper :topImages="topImage"></detail-swiper>
      <detail-base-info :detailBaseInfo="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <div class="detail-text">——— 宝贝详情 ———</div>
      <detail-image-info :detailInfo="detailInfo"></detail-image-info>
      <div class="detail-text">——— 尺码详情 ———</div>
      <datail-params-info :paramsInfo="paramsInfo"></datail-params-info>
      <div class="detail-text">——— 好物推荐 ———</div>
      <goods-list :goods="recommendInfo"></goods-list>
      <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DataNavBar from './childComps/DataNavBar.vue'
import DetailSwiper from './childComps/detailSwiper/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailImageInfo from './childComps/DetailImageInfo.vue'
import DatailParamsInfo from './childComps/DatailParamsInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import GoodsList from 'components/contents/goods/goodsList.vue'

import {getDetail, Goods, getRecommend} from '../../network/detail'

export default {
    data() {
        return {
            iid: null,
            topImage: [],
            goods: {},
            shopInfo: {},
            detailInfo: {
                detailImage: [{}]
            },
            paramsInfo: {
                rule: '',
                image:'',
                info: {}
            },
            commentInfo:{
                user:{}
            },
            recommendInfo:[],
            themeToYs:[0,1000,2000,3000]
        }
    },
    components: {
        DataNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailImageInfo,
        DatailParamsInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar
    },
    created() {
        //1.保存获取的id
        this.iid=this.$route.params.iid;   
        //2.根据id获取数据
        getDetail(this.iid).then (res =>{

            const data=res.result;
            //获取顶部滚动图
            this.topImage = data.itemInfo.topImages;
            //获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns,data.shopInfo.services);
           
            //获取商家信息
            this.shopInfo = data.shopInfo;
            //获取底部商品展示图片
            this.detailInfo = data.detailInfo;
            //获取商品规格
            this.paramsInfo = data.itemParams;
            //获取评论
            if(data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0];
            }
           
        })
        //3.获取推荐数据
        getRecommend().then(res => {
           console.log(res.data.list); 
           this.recommendInfo = res.data.list;
        })
    },
    methods: {
        titleClick(index) {
            console.log(index);
           // this.$refs.scroll.scrollTo(0,this.themeToYs[index],100);
        },
        addToCart() {
            const product = {};
            product.image = this.topImage[0];
            product.title = this.goods.desc;
            product.desc = this.goods.desc;
            product.price = this.goods.realPrice;
            product.iid = this.iid;
            this.$store.dispatch("addCart", product);
            console.log(1)
        }
    }
}
</script>

<style>
    .detail {
        background-color: #f0f0f0;
        z-index: 1000;
    }
    .detail-text {
        text-align: center;
        padding: 10px;
        margin-top: 5px;
        color: rgb(145, 145, 145);
        font-size: 14px;
    }
</style>