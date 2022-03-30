<template>
  <div class="recommend-main">
    <h1>推荐</h1>
    <my-banner :bannerList="bannerList" />
  </div>
</template>

<script setup lang="ts">
import MyBanner from "@/components/common/banner/MyBanner.vue"
import { useStore } from "@/store"
import { computed } from "vue"

const store = useStore()

const bannerList = computed(() => store.getters["recommend/bannerList"])

const getData = () => {
  console.log("eee")
  store.dispatch("recommend/getBannerListAction")
}

getData()
</script>

<style scoped lang="less"></style>
