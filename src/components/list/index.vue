<template>
    <div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"></van-list>
    </div>
</template>

<script>
export default {
    props: {
        pageSize: Number,
        pageNum: Number
    },
    data() {
        return {
            finished: false,
            loading: false
        }
    },
    methods: {
        onload() {
            this.pageNum++
            this.$parent.onload()
            this.finished = true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
