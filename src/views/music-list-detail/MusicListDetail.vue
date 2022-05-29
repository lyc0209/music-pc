<!--歌单详情页-->
<template>
  <div class="music-detail">
    <music-list-detail-header />
    <el-tabs v-model="currentName">
      <el-tab-pane label="歌曲" name="songList">
        <song-list :song-id-list="songIdList"></song-list>
      </el-tab-pane>
      <el-tab-pane label="评论" name="commentList">
        <comment-list></comment-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store"
import { useRoute } from "vue-router"
import { computed, ref } from "vue"
import MusicListDetailHeader from "@/components/common/music-list-detail-header/MusicListDetailHeader.vue"
import SongList from "@/components/common/song-list/SongList.vue"
import CommentList from "@/components/common/comment-list/CommentList.vue"
import { IMusicListDetail } from "@/service/types"

const store = useStore()
const route = useRoute()

const idRef = ref<number>(Number(route.query.id))

const getUserListDetail = () => {
  const id = idRef.value
  store.dispatch("musicListDetail/getMusicListDetailAction", { id })
}
const musicListDetail = computed<IMusicListDetail>(
  () => store.getters["musicListDetail/musicListDetail"]
)
const songIdList = computed<string[]>(
  () => musicListDetail.value?.trackIds?.map((item) => item.id) ?? []
)

const currentName = ref<string>("songList")
getUserListDetail()
</script>

<style scoped lang="less"></style>
