<template>
  <div class="detail-image-info"  v-if="Object.keys(detailInfo).lenght !== 0">
      <div class="info-list">
          <img   v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" >
      </div>
  </div>
</template>

<script>
export default {
    props: {
        detailInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imageLoad() {

        }
    }
}
</script>

<style>
    .detail-image-info {
        /* width: 97%;
        margin-left: 1.5%; */
        margin-top: 10px;

        background-color: #fff;
        /* border-radius: 10px; */

    }
    .info-key {
        font-size: 15px;
        color: rgb(145, 145, 145);
        margin: 5px;   
        padding: 5px;
    }
    .info-list img {
        width: 100%;
    }
   
</style>