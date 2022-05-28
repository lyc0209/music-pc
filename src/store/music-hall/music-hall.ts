import { Module } from "vuex"
import { IRootState } from "@/store/types"
import { IMusicHallState } from "@/store/music-hall/types"
import { getTopMusicList } from "@/service/music-hall/music-hall"
import { IMusicItem } from "@/service/types"

const musicHallModule: Module<IMusicHallState, IRootState> = {
  namespaced: true,
  state: () => ({
    musicList: []
  }),
  mutations: {
    updateMusicList(state, musicList: IMusicItem[]) {
      state.musicList = musicList
    }
  },
  actions: {
    async getMusicListAction({ commit }) {
      const result = await getTopMusicList()
      // 类型转换
      const list: IMusicItem[] = result.playlists.map((item: any) => {
        return { id: item.id, name: item.name, picUrl: item.picUrl, playCount: item.playCount }
      })
      commit("updateMusicList", list)
    }
  },
  getters: {
    musicList: (state) => state.musicList
  }
}

export default musicHallModule
