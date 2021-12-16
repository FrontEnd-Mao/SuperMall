<template>
  <div class="dataNavBar">
        <nav-bar>
            <div slot="left" class="back" @click="clickBack">
                <img src="~assets/images/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item , index) in titles" :key="item.title" 
                     class="title-item" :class="{active: index == currentIndex}" 
                     @click="clickTitle(index)">
                    {{item}}
                </div>
            </div>
        </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
    data() {
        return {
           titles: ['商品','参数','评论','推荐'],
           currentIndex: 0
        }
    },
    components: {
        NavBar,
    },
    methods: {
        clickTitle(index) {
            this.currentIndex = index;
            this.$emit('titleClick' , index);
        },
        clickBack() {
            this.$router.back();
        }
    }
}
</script>

<style>
    .title {
        display: flex;
    }
    .title-item {
        flex: 1;
    }
    .active {
        color: var(--color-tint);
    }
    .back img {
        margin-top: 10px;
    }
</style>