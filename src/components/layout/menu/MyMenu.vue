<template>
  <div class="menu-main">
    <div class="menu-head">
      <el-image :src="Logo"></el-image>
      <span>我的音乐</span>
    </div>

    <el-scrollbar>
      <div class="menu-group" v-for="menuGroup in menus" :key="menuGroup.name">
        <div class="menu-group-name">{{ menuGroup.name }}</div>
        <div
          class="menu-item"
          v-for="menu in menuGroup.menuList"
          :key="menu.key"
          :class="{ active: currentKey === menu.key }"
          @click="click(menu)"
        >
          <i class="iconfont" :class="menu.icon" />
          <span>{{ menu.name }}</span>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { Logo } from "../../../assets/img"
import { useMenus } from "./use-menus"

const { menus, currentKey, click } = useMenus()
</script>

<style scoped lang="less">
.menu-main {
  padding: 30px;

  .menu-head {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;

    span {
      margin-left: 10px;
      font-size: 24px;
    }
  }

  .menu-group {
    .menu-group-name {
      padding: 10px;
      color: #828282;
      font-size: 18px;
    }
    .menu-item {
      display: flex;
      padding: 8px;
      align-items: center;
      border-radius: 8px;

      &:hover {
        cursor: pointer;
      }

      i {
        font-size: 20px;
      }

      span {
        margin-left: 8px;
      }
    }
  }
}

.active {
  background-color: @color-primary;
  color: white;
}
</style>
