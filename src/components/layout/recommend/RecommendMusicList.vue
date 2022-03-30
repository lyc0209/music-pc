<template>
  <div>
    <h3 class="recommend-title">推荐歌单 ></h3>
    <music-list :musics="musics" />
  </div>
</template>

<script setup lang="ts">
import MusicList from "@/components/common/music-list/MusicList.vue"
import { useStore } from "@/store"
import { computed } from "vue"

const store = useStore()

const musics = computed(() => store.getters["recommend/musicList"])
const getMusicList = () => {
  store.dispatch("recommend/getMusicListAction", { limit: 10 })
}

getMusicList()
</script>

<style scoped lang="less">
.recommend-title:hover {
  cursor: pointer;
}
</style>
