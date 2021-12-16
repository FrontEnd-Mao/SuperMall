<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).lenght !==0">
      <div class="params-table">
          <table v-for="(tables, indea) in paramsInfo.rule.tables" :key="'new_1'+indea" >
              <tr  v-for="(table, index) in tables" :key="'new_2'+index" >
                  <td v-for="tr in table" :key="'new_3'+tr">{{tr}}</td>
              </tr>
          </table>
      </div>
      <table class="info-params" >
         
          <tr v-for="(info , index) in paramsInfo.info.set" :key="'new_4'+index" >
              <td class="info-params-key">{{info.key}}</td>
              <td class="params-value">{{info.value}}</td>
          </tr>
      </table>
      <!-- <div class="info-img" v-if="paramsInfo.image.lenght !== 0">
          <img :src="paramsInfo.image" alt="">
      </div> -->
  </div>
</template>

<script>
export default {
    props: {
        paramsInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style>
    .params-info {
        /* width: 97%;
        margin-left: 1.5%; */
        margin-top: 10px;

        background-color: #fff;
        /* border-radius: 10px; */
    }
    .params-table {
        border-bottom: 2px solid #f0f0f0;
    }
    .params-info table {
        width: 100%;
        text-align: left;
        padding-top: 10px;
        padding-left: 20px;
        /* border-collapse:collapse; */

    }
    .params-info table tr td{
        height: 40px;
        font-size: 14px;
    }
    .info-params-key {
        padding-right: 10px;
    }
</style>