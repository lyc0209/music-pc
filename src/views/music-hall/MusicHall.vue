<template>
  <div class="music-hall">
    <h1>音乐馆</h1>
    <el-affix target=".music-hall" :offset="56">
      <el-tabs v-model="currentName" @tab-click="click">
        <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name" />
      </el-tabs>
    </el-affix>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTabs } from "@/views/music-hall/use-tabs"

const { tabs, currentName, click } = useTabs()
</script>

<style scoped lang="less"></style>
