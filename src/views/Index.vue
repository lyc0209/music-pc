<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/components/menu/Menu.vue"
</script>

<style scoped lang="less">
.aside {
  width: 300px;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>
