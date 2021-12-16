<template>

    <div class="wrapper" ref="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>


</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name: "Category",
        data() {
          return {
            scroll: null
          }
        },
        mounted() {
         
         this.scroll = new BScroll(document.querySelector('.wrapper') , {
            probeType: 3,
            click: true,
            pullUpLoad: true
         })
         this.scroll.on('pullingUp' , () => {
            console.log('上拉加载更多');
            console.log(this.scroll);
            setTimeout(() => {
              this.scroll.finishPullUp();
            }, 2000);
         })
         this.scroll.scrollerHeight= 3000;
        },
        methods: {
            refresh() {
                this.scroll.refresh();
            },
            scrollerHeight() {
                 this.scroll.scrollerHeight = 1800;
                 
            }
        }
    }
</script>

<style>
    .wrapper {
        width: 100%;
        height: 1800px;
    }
</style>