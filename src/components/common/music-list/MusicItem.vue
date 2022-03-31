<template>
  <div class="music-item">
    <el-image :src="musicItem.picUrl" />
    <div class="music-name">{{ musicItem.name }}</div>
    <div class="play-number">
      <span>{{ useNumberFormat(musicItem.playCount || 0) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IMusicItem } from "@/service/types"
import { useNumberFormat } from "@/utils/number"

defineProps<{
  musicItem: IMusicItem
}>()
</script>

<style scoped lang="less">
.music-item {
  position: relative;
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

  .play-number {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 6px;
    margin-right: 6px;
    color: white;
    font-size: 14px;
  }
}
</style>
