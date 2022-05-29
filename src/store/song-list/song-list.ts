import { Module } from "vuex"
import { IRootState } from "@/store/types"
import { ISongListState } from "@/store/song-list/types"
import { getSongList } from "@/service/song-list/song-list"
import { ISong } from "@/service/types"

const songListModule: Module<ISongListState, IRootState> = {
  namespaced: true,
  state: () => ({
    songList: []
  }),
  mutations: {
    updateSongList(state, musicListDetail: ISong[]) {
      state.songList = musicListDetail
    }
  },
  actions: {
    async getSongListAction({ commit }, payload: { ids: string[] }) {
      const param = payload.ids.reduce((pre, curr) => `${pre},${curr}`)
      const result = await getSongList(param).catch((err) => Promise.reject(err))
      const songList: ISong[] = result.songs
      commit("updateSongList", songList)
    }
  },
  getters: {
    songList: (state) => state.songList
  }
}

export default songListModule
