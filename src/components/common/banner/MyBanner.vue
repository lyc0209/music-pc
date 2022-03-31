<template>
  <div class="my-banner">
    <el-carousel :interval="4000" trigger="click" type="card" height="250px">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <el-image :src="item.imageUrl" fit="contain">
          <template #placeholder>
            <div class="image-slot">Loading<span class="dot">...</span></div>
          </template>
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  bannerList: any[]
}>()
</script>

<style scoped lang="less">
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 14px;
}
.dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style>
