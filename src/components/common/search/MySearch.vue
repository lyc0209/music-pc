<template>
  <div class="search-main">
    <el-input v-model="input" class="search-input" placeholder="搜索音乐" clearable>
      <!--      <template #suffix>-->
      <!--        <el-icon class="el-input__icon"><calendar /></el-icon>-->
      <!--      </template>-->
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const input = ref("")
</script>

<style scoped lang="less">
.search-main {
  height: 100%;

  .search-input {
    height: 100%;
  }
  .search-input :deep(.el-input__inner) {
    height: 80%;
    border-radius: 20px;
    margin: 4px 0;
  }
}
</style>
