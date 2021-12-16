<template>
  <div class="goodsListItem" @click="itemClick">
    <img :src="showImage" @load="imageLoad">
    <div>
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        goodsItem:{
            type: Object,
            default() {
                return {}
            }
        }
        
    },
    methods: {
        imageLoad() {
            this.$bus.$emit('itemImageLoad');
        },
        itemClick() {
            this.$router.push('/detail/' + this.goodsItem.iid);
        }
    },
    computed: {
        showImage() {
            return this.goodsItem.image || this.goodsItem.show.img
        }
    }
}
</script>

<style>
    .goodsListItem {
        position: relative;
        border-bottom: 10px;
        text-align: center;
    }
    .goodsListItem img {
        width: 100%;
        height: 220px;
        border-radius: 5px;
    }
    p {
        font-size: 13px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .price{
        font-size: 12px;
        color: var(--color-tint);
    }
    .collect{
        font-size: 12px;
        padding-left: 20px;
    }
</style>