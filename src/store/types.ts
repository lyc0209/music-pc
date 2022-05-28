import { IRecommendState } from "@/store/recommend/types"
import { IUser } from "@/service/types"

export interface IRootState {
  profile: IUser | null
}

interface IRootWithModule {
  recommend: IRecommendState
}

export type IStoreType = IRootState & IRootWithModule
