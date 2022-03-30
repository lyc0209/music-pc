import { IRecommendState } from "@/store/recommend/types"

export interface IRootState {
  count: number
}

interface IRootWithModule {
  recommend: IRecommendState
}

export type IStoreType = IRootState & IRootWithModule
