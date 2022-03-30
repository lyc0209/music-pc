import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import { IRootState, IStoreType } from "@/store/types"
import recommend from "@/store/recommend/recommend"

export const key: InjectionKey<Store<IStoreType>> = Symbol()

const store = createStore<IRootState>({
  state: () => ({
    count: 0
  }),
  modules: {
    recommend
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore(): Store<IStoreType> {
  return baseUseStore()
}

export default store

// import { createStore } from "vuex"
//
// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// })
