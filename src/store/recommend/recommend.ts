import { Module } from "vuex"
import { IRecommendState } from "@/store/recommend/types"
import { IRootState } from "@/store/types"
import { getBannerList, getMusicList } from "@/service/recommend/recommend"

const recommendModule: Module<IRecommendState, IRootState> = {
  namespaced: true,
  state: () => ({
    bannerList: [],
    musicList: []
  }),
  mutations: {
    updateBannerList(state, bannerList: any[]) {
      state.bannerList = bannerList
    },
    updateMusicList(state, musicList: any[]) {
      state.musicList = musicList
    }
  },
  actions: {
    async getBannerListAction({ commit }) {
      const result = await getBannerList()
      commit("updateBannerList", result.banners)
    },
    async getMusicListAction({ commit }, payload: { limit: number }) {
      const result = await getMusicList(payload)
      commit("updateMusicList", result.result)
    }
  },
  getters: {
    bannerList: (state) => state.bannerList,
    musicList: (state) => state.musicList
  }
}

export default recommendModule
