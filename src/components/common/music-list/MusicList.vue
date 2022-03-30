<template>
  <div class="music-list">
    <music-item v-for="item in musics" :key="item.id" :musicItem="item" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import MusicItem from "@/components/common/music-list/MusicItem.vue"

defineProps<{
  musics: any[]
}>()
</script>

<style scoped lang="less">
.music-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
