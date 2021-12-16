<template>
  <div class="recommends">
      <div v-for="item in recommends" :key="item.recommend" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommends {
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 15px 0px 55px;
        border-bottom: 8px solid #eee;
       
    }
    .recommend-item {
        flex: 1;
        width: 60px;
        height: 50px;
   
    }
    .recommend-item a img {
         width: 60px;
        height: 60px;
        margin-bottom: 5px;
    }
</style>