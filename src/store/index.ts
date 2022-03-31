import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import { IRootState, IStoreType } from "@/store/types"
import recommend from "@/store/recommend/recommend"
import musicHall from "@/store/music-hall/music-hall"
import { IMyProfile } from "@/service/types"
import { loginByCellPhone } from "@/service/login/login"
import localCache from "@/utils/cache"

export const key: InjectionKey<Store<IStoreType>> = Symbol()

const store = createStore<IRootState>({
  state: () => ({
    profile: null
  }),
  mutations: {
    updateProfile(state, profile: IMyProfile) {
      state.profile = profile
    }
  },
  actions: {
    async loginByCellPhoneAction({ commit }, payload: { phone: string; password: string }) {
      const result = await loginByCellPhone(payload).catch((err) => {
        return Promise.reject(err)
      })
      const profile: IMyProfile = { ...result.profile }
      localCache.setCache("profile", profile)
      commit("updateProfile", profile)
    },
    /**
     * 初始化数据，从localStorage中获取
     * @param commit
     */
    initData({ commit }) {
      const myProfile = localCache.getCache<IMyProfile>("profile")
      if (myProfile) {
        commit("updateProfile", myProfile)
      }
    }
  },
  getters: {
    profile: (state) => state.profile
  },
  modules: {
    recommend,
    musicHall
  }
})

// vuex 浏览器一刷新，数据就消失
export function setupStore() {
  store.dispatch("initData")
}

// 定义自己的 `useStore` 组合式函数
export function useStore(): Store<IStoreType> {
  return baseUseStore()
}

export default store
