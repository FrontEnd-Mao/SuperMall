<template>
  <div class="base-info" v-if="Object.keys(detailBaseInfo).length != 0 ">
    <div class="item-one">
      <div class="info-title">
          {{detailBaseInfo.title}}
      </div>
      <div class="info-price">
          <span>{{detailBaseInfo.newPrice}}</span>
          <span class="r-price">{{detailBaseInfo.realPrice}}</span>
          <span class="o-price">{{detailBaseInfo.oldPrice}}</span>
          <span class="dis">{{detailBaseInfo.discount}}</span>
       
      </div>


      <div class="info-other">
          <span class="info-other-item">{{detailBaseInfo.columns[0]}}</span> 
          <span class="info-other-item">{{detailBaseInfo.columns[1]}}</span>
          <span class="info-other-item">{{detailBaseInfo.services[detailBaseInfo.services.length-1].name}}</span> 
      </div>
    </div>
      <div class="info-service">
          <span class="info-service-item" v-for="index in detailBaseInfo.services.length-1" :key="index.item">
              <img :src="detailBaseInfo.services[index-1].icon" alt="">
              <span>{{detailBaseInfo.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        detailBaseInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        
    }
}
</script>

<style>
    .item-one {
        width: 97%;
        margin-left: 1.5%;
        margin-top: 10px;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
    }
    .info-title {
        padding: 2px;
        font-weight: bold;
        margin: 5px 0 10px 8px;

    }
    .info-price {
        margin-left: 8px;
    }
    .r-price {
        font-size: 25px;
        color: var(--color-high-text);
    }
    .o-price {
        font-size: 12px;
        margin-left: 5px;
        color: var(--color-text);
        text-decoration:line-through
    }
    .dis {
        display: inline-block;
        padding: 2px;
        margin-left: 10px;
        font-size: 14px;
        color: #fff;
        background-color: var(--color-tint);
        border-radius: 5px;
    }
    .info-other {
        display: flex;
        padding: 10px 0 2px 10px;
        margin-top: 8px;
        font-size: 12px;
        text-align: center;
    }
    .info-other-item {
        flex: 1;
    }
    .info-service {
        display: flex;
        width: 97%;
        margin-left: 1.5%;
        padding-top: 10px;
        margin-top: 10px;
        background-color: #fff;
        border-radius: 5px;
    }
    .info-service-item {
        flex: 1;
        font-size: 10px;
        margin-left: 5px;
        padding: 5px;
    }
    .info-service-item img {
        width: 10px;
        height: 10px;
    }
</style>