<template>
  <div class="comment-info" v-if="Object.keys(commentInfo) !== 0">
      <div class="info-header">
          <div class="info-header-title">宝贝评价</div>
          <div class="info-header-more">更多评论 ></div>
      </div>
      <div class="info-user">
          <img :src="commentInfo.user.avatar" alt="">
          <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
          <p>{{commentInfo.centent}}</p>
          <div class="info-imgs">
              <img :src="item" v-for="(item , index) in commentInfo.images" :key="index" alt="">
          </div>
          <div class="info-other">
              <span class="date">{{commentInfo.created |showDate(commentInfo.created)}}</span>
              <span>{{commentInfo.style}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/util.js"
export default {
    props: {
        commentInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        showDate(value) {
            return formatDate(value*1000)
        }
    },

}
</script>

<style>
    .comment-info {
        width: 97%;
        margin-left: 1.5%;
        margin-top: 10px;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
    }
    .info-header {
        padding: 5px;

    }
    .info-header-title {
        float: left;
        padding-right: 160px;
        font-weight: bold;
    }
    .info-header-more {
        float: left;
        font-size: 12px;
    }
    .info-user {
        margin-top: 25px;
    }
    .info-user img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        vertical-align:middle;  
        margin-right: 10px;
    }
    .info-imgs img {
        width: 80px;
        height: 80px;
        margin-right: 5px;
        margin-top: 15px;
        border-radius: 5px;
    }
    .info-other {
        padding: 0;
    }
    .info-other span {
        margin-right: 5px;
    }
</style>