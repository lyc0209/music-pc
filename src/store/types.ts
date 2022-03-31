import { IRecommendState } from "@/store/recommend/types"
import { IMyProfile } from "@/service/types"

export interface IRootState {
  profile: IMyProfile | null
}

interface IRootWithModule {
  recommend: IRecommendState
}

export type IStoreType = IRootState & IRootWithModule
