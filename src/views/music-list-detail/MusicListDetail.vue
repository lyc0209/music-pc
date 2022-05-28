<!--歌单详情页-->
<template>
  <div class="music-detail">
    <music-list-detail-header />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store"
import { useRoute } from "vue-router"
import { ref } from "vue"
import MusicListDetailHeader from "@/components/common/music-list-detail-header/MusicListDetailHeader.vue"

const store = useStore()
const route = useRoute()

const idRef = ref<number>(Number(route.query.id))

const getUserListDetail = () => {
  const id = idRef.value
  store.dispatch("musicListDetail/getMusicListDetailAction", { id })
}
getUserListDetail()
</script>

<style scoped lang="less"></style>
