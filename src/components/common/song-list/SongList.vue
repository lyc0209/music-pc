<!--歌曲列表-->
<template>
  <div class="song-list">
    <el-table :data="songListView" style="width: 100%">
      <el-table-column prop="name" label="歌曲" />
      <el-table-column prop="artistName" label="歌手" width="300" />
      <el-table-column prop="albumName" label="专辑" width="300" />
      <el-table-column prop="duration" label="时长" width="100" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store"
import { computed, watch } from "vue"
import { ISongView } from "@/components/common/song-list/types"
import { ISong } from "@/service/types"
const props = defineProps<{
  songIdList: string[]
}>()

const store = useStore()

const getSongList = () => {
  store.dispatch("songList/getSongListAction", { ids: props.songIdList })
}

watch(
  () => props.songIdList,
  (list) => {
    if (list?.length > 0) {
      getSongList()
    }
  },
  {
    immediate: true
  }
)
const songList = computed<ISong[]>(() => {
  return store.getters["songList/songList"]
})

const songListView = computed<ISongView[]>(() => {
  return songList.value.map((item) => {
    return {
      id: item.id,
      name: item.name,
      artistName:
        item.ar
          .slice(0, 2)
          .map((ar) => ar.name)
          .reduce((pre, curr) => `${pre},${curr}`) + (item.ar.length > 2 ? " ..." : ""),
      albumName: item.al?.name ?? "未知",
      duration: item.dt
    }
  })
})
</script>

<style scoped lang="less">
.el-table {
  /deep/tbody tr:hover > td:hover {
    cursor: pointer;
  }
}
</style>
