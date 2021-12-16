<template>
  <div id="home">
    <nav-bar class="home-nav"> 
      <div slot="center">购物街</div>
    </nav-bar>
    
    <scroll class="content" ref="scroll">

        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        
        <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from '../../components/contents/tabControl/tabControl.vue'

import HomeSwiper from './childComps/HomeSwiper.vue'
import recommendView from './childComps/recommendView.vue'
import featureView from './childComps/featuresView.vue'
import tabControl from 'components/contents/tabControl/tabControl.vue'
import goodsList from 'components/contents/goods/goodsList.vue'
import backTop from 'components/common/backtop/BackTop.vue'

import {getHomeMultiData, getGoodsData} from 'network/home.js'
import GoodsList from '../../components/contents/goods/goodsList.vue'

import scroll from 'components/common/scroll/scroll.vue'



export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      recommendView,
      featureView,
      tabControl,
      TabControl,
      goodsList,
      GoodsList,
      scroll,
      backTop
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page:0 , list: []},
          'new': {page:0 , list: []},
          'sell': {page:0 , list: []},
        },
        currentType:'pop',
        scroll: null
      }
    },
    created() {
      this.getHomeMultiData()
      this.getGoodsData('pop')
      this.getGoodsData('new')
      this.getGoodsData('sell')

      //监听图片加载完成
      // this.$bus.$on('itemImageLoad' , () => {
      //   this.$refs.scroll.refresh();
        
        
      //   console.log('sad');
      // })
    },
    methods: {
      /**
       * 点击事件相关
       */
      tabClick(index) {
          switch(index) {
            case 0 :
              this.currentType = 'pop';
              break;
            case 1 :
              this.currentType = 'new';
              break;
            case 2 :
              this.currentType ='sell';
              break;
          }
      },
      backClick() {
          this.$refs.scroll.scroll.scrollTo(0,0);
         // console.log(this.$refs.scroll.scroll);
      },

      /** 
       * 网络请求相关
      */
      getHomeMultiData(){
        getHomeMultiData().then(res => {
        //console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        })
      },
      getGoodsData(type){
        const page = this.goods[type].page + 1;
        getGoodsData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      }
    }
}
  
</script>

<style>
    #home {
      padding-top: 44px;
      position: relative;
    }
    .home-nav {
      background-color: var(--color-tint);
      color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    .tab-control {
      position: sticky;
      top: 44px;
      background-color: #fff;
      z-index: 8;
    }
    .content {
  
      overflow: hidden;
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
 
    }
</style>