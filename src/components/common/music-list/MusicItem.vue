<template>
  <div class="music-item">
    <el-image :src="musicItem.picUrl" />
    <div class="music-name">{{ musicItem.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import { IMusicItem } from "@/components/common/music-list/types"

defineProps<{
  musicItem: IMusicItem
}>()
</script>

<style scoped lang="less">
.music-item {
  width: 18%;
  min-width: 18%;
  max-width: 18%;
  margin-right: calc(10% / 4);
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }

  &:nth-child(5n) {
    margin-right: 0;
  }

  .el-image {
    border-radius: 10px;
  }

  .music-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
