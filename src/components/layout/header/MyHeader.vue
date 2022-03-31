<template>
  <div class="my-header">
    <div class="header-left">
      <my-search />
    </div>
    <div class="header-right">
      <div v-if="!myProfile" class="not-login" @click="handleLoginClick">
        <i class="iconfont" :class="Icon.avatar" />
        <span class="user-name">点击登录</span>
      </div>
      <div v-else class="login-ed">
        <el-avatar size="default" :src="myProfile?.avatarUrl" />
        <span class="user-name">{{ myProfile?.nickname }}</span>
      </div>
    </div>
  </div>
  <div>
    <login :dialogVisible="showLoginDialog" @onCloseDialog="handleOnCloseDialog" />
  </div>
</template>

<script setup lang="ts">
import MySearch from "@/components/common/search/MySearch.vue"
import { Icon } from "@/assets/icon"
import { computed, ref } from "vue"
import Login from "@/components/dialog/login/Login.vue"
import { useStore } from "@/store"
import { IMyProfile } from "@/service/types"

const store = useStore()

const showLoginDialog = ref<boolean>(false)

const myProfile = computed<IMyProfile>(() => store.getters.profile)

const handleLoginClick = () => {
  showLoginDialog.value = true
}
const handleOnCloseDialog = (value: boolean) => {
  showLoginDialog.value = value
}
</script>

<style scoped lang="less">
.my-header {
  height: 100%;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-left {
    height: 100%;
  }
  .header-right {
    display: flex;
    align-items: center;
    padding-right: 10px;

    .not-login,
    .login-ed {
      display: flex;
      align-items: center;
      &:hover {
        cursor: pointer;
        color: @color-primary;
      }
      .go-icon-avatar {
        font-size: 28px;
      }
      .user-name {
        font-size: 18px;
        margin-left: 6px;
      }
    }
  }
}
</style>
