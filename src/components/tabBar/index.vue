<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/Home">
        <span>主页</span>
        <template #icon="props">
          <icon-svg :name="props.active ? '' : ''"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
