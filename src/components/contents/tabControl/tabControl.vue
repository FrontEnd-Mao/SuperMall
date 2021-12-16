<template>
  <div class="tab-control">
      <div v-for="(item , index) in titles" :key="item.title" class="tabControl-item" :class="{active: index === currentIndex}" @click="tabClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        tabClick(index) {
            this.currentIndex = index;
            this.$emit('tabClick', index);
        }
    }
}
</script>

<style>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;

    }
    .tabControl-item {
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
    .tabControl-item span {
        padding: 5px;
    }
    .active {
        color: var(--color-high-text);
    }
    .active span {
        border-bottom: 3px solid var(--color-high-text);
    }
</style>