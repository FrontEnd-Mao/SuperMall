<template>
  <div>
    <swiper>
        <swiper-item v-for="item in banners" :key="item.banner">
          <a :href="item.link">
            <img :src="item.image">
          </a>
        </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
      Swiper, 
      SwiperItem
    },
    
}
</script>

<style>

</style>