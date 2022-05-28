<template>
  <div class="music-list">
    <music-item
      v-for="item in musics"
      :key="item.id"
      :musicItem="item"
      @click="handleItemClick(item)"
    />
  </div>
</template>

<script setup lang="ts">
import MusicItem from "@/components/common/music-list/MusicItem.vue"
import { IMusicItem } from "@/service/types"
import { useRouter } from "vue-router"
import { Types } from "@/router/types"

defineProps<{
  musics: IMusicItem[]
}>()

const router = useRouter()

const handleItemClick = async (item: IMusicItem) => {
  console.log("执行一次")
  await router.push({ name: Types.musicListDetail.name, query: { id: item.id } })
}
</script>

<style scoped lang="less">
.music-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
