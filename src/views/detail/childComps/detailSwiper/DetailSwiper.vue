<template>

      <swiper  class="detail-swiper">
          <swiper-item v-for="item in topImages" :key="item.topImage">
              <img :src="item">
          </swiper-item>
      </swiper>

</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    components:{
        Swiper,
        SwiperItem

    },
    props:{
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        
    }
}
</script>

<style>
    .detail-swiper {
        height: 300px;
    }
</style>