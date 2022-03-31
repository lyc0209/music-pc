import { Module } from "vuex"
import { IRecommendState } from "@/store/recommend/types"
import { IRootState } from "@/store/types"
import { getBannerList, getMusicList } from "@/service/recommend/recommend"
import { IMusicItem } from "@/service/types"

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
    updateMusicList(state, musicList: IMusicItem[]) {
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
      const list: IMusicItem[] = result.result.map((item: any) => {
        return { id: item.id, name: item.name, picUrl: item.picUrl, playCount: item.playCount }
      })
      commit("updateMusicList", list)
    }
  },
  getters: {
    bannerList: (state) => state.bannerList,
    musicList: (state) => state.musicList
  }
}

export default recommendModule
