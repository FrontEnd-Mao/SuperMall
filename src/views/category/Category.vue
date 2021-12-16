<template>
  <div class="wrapper">
    <ul>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
    </ul>
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
         console.log();
         this.scroll = new BScroll(document.querySelector('.wrapper') , {
            probeType: 3,
            click: true,
            pullUpLoad: true
         })
         this.scroll.on('pullingUp' , () => {
            console.log('上拉加载更多');
            setTimeout(() => {
              this.scroll.finishPullUp();
            }, 2000);
         })
        }
    }
</script>

<style scoped>
    .wrapper{
      height: 300px;
      background-color: red;
      overflow: hidden;
    }
</style>
