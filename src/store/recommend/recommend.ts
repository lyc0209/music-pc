import { Module } from "vuex"
import { IRecommendState } from "@/store/recommend/types"
import { IRootState } from "@/store/types"
import { getBannerList } from "@/service/recommend/recommend"

const recommendModule: Module<IRecommendState, IRootState> = {
  namespaced: true,
  state: () => ({
    bannerList: []
  }),
  mutations: {
    updateBannerList(state, bannerList: any[]) {
      state.bannerList = bannerList
    }
  },
  actions: {
    async getBannerListAction({ commit }) {
      const result = await getBannerList()
      console.log(result)
      commit("updateBannerList", result.banners)
    }
  },
  getters: {
    bannerList: (state) => state.bannerList
  }
}

export default recommendModule
