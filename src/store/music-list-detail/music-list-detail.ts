import { Module } from "vuex"
import { IRootState } from "@/store/types"
import { IMusicListDetailState } from "@/store/music-list-detail/types"
import { IMusicListDetail } from "@/service/types"
import { getMusicListDetail } from "@/service/music-list/music-list"

const musicListDetailModule: Module<IMusicListDetailState, IRootState> = {
  namespaced: true,
  state: () => ({
    musicListDetail: null
  }),
  mutations: {
    updateMusicListDetail(state, musicListDetail: IMusicListDetail) {
      state.musicListDetail = musicListDetail
    }
  },
  actions: {
    async getMusicListDetailAction({ commit }, payload: { id: number }) {
      const result = await getMusicListDetail(payload.id).catch((err) => Promise.reject(err))
      const musicListDetail: IMusicListDetail = { ...result.playlist }
      commit("updateMusicListDetail", musicListDetail)
    }
  },
  getters: {
    musicListDetail: (state) => state.musicListDetail
  }
}

export default musicListDetailModule
