<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <my-menu />
      </el-aside>
      <el-container class="main-container">
        <el-header>
          <my-header />
        </el-header>
        <el-main>
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </el-main>
        <el-footer>
          <my-footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MyMenu from "@/components/menu/MyMenu.vue"
import MyHeader from "@/components/header/MyHeader.vue"
import MyFooter from "@/components/footer/MyFooter.vue"
</script>

<style scoped lang="less">
.common-layout {
  height: 100vh;
}
.aside {
  width: 300px;
  height: 100vh;
  background-color: #f0f0f0;
}
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.el-main {
  overflow: hidden;
  flex: 1;
}
//.el-footer {
//  position: fixed;
//  bottom: 0;
//  width: 100%;
//}
</style>
