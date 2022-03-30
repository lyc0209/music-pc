<template>
  <div>
    <music-list :musics="musics" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store"
import { computed } from "vue"
import MusicList from "@/components/common/music-list/MusicList.vue"

const store = useStore()
const musics = computed(() => store.getters["musicHall/musicList"])
const getMusicList = () => {
  store.dispatch("musicHall/getMusicListAction")
}
getMusicList()
</script>

<style scoped></style>
