<template>
  <div id="app">
    <van-loading v-if="loading" color="#1989fa" size="50px" class="vw-100 vh-100 flex-center" />
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'loading'
    ])
  }
}
</script>
