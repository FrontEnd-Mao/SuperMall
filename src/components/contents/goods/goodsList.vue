<template>
   <div class="goods">
       <goods-list-item v-for="item in goods" :key="item.good" :goodsItem="item" class="gooodsListItem">
       </goods-list-item>
   </div>
</template>

<script>
import goodsListItem from './goodsListItem.vue'
export default {
    components: {
        goodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .goods {
        padding-bottom: 200px;
        border-bottom: 200px;
        background-color: #fff;
    }
    .gooodsListItem {
        width: 50%;
        height: 270px;
        padding: 10px;
        float: left;
    }
</style>