<!--歌单详情页头部-->
<template>
  <div class="m-music-list-detail-header">
    <el-image class="m-cover-img" :src="musicListDetail?.coverImgUrl" fit="fill" />
    <div class="m-header-right">
      <h1>{{ musicListDetail?.name }}</h1>
      <div class="m-user-and-tag">
        <div class="m-user-info">
          <el-image class="m-user-avatar" :src="musicListDetail?.creator?.avatarUrl" fit="fill" />
          <span>{{ musicListDetail?.creator?.nickname }}</span>
        </div>
        <span class="m-tag" v-for="tag in musicListDetail?.tags" :key="tag">#{{ tag }}</span>
      </div>
      <div class="m-description">{{ musicListDetail?.description }}</div>
      <div class="m-button">
        <el-button round type="primary">播放全部</el-button>
        <el-button round>收藏</el-button>
        <el-button circle>...</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store"
// import { useRoute } from "vue-router"
// import { ref } from "vue"
import { computed } from "vue"
import { IMusicListDetail } from "@/service/types"

const store = useStore()
// const route = useRoute()

// TODO: 第一次进来是null, 没有coverImgUrl等属性
const musicListDetail = computed<IMusicListDetail>(
  () => store.getters["musicListDetail/musicListDetail"]
)
</script>

<style scoped lang="less">
.m-music-list-detail-header {
  display: flex;
  .m-cover-img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-right: 30px;
  }
  .m-header-right {
    flex: 1;
    .m-user-and-tag {
      display: flex;
      align-items: center;
      .m-user-info {
        display: flex;
        align-items: center;
        .m-user-avatar {
          width: 30px;
          height: 30px;
          margin-right: 10px;
          border-radius: 50%;
        }
      }
      .m-tag {
        color: #7b7b7b;
        margin-left: 20px;
      }
    }
    .m-description {
      color: #7b7b7b;
      margin-top: 10px;
    }
    .m-button {
      margin-top: 30px;
    }
  }
}
</style>
