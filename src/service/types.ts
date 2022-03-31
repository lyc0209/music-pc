export interface IDataType<T = any> {
  code: number
  data: T
  msg: string
}

export interface IMusicItem {
  id: number
  name: string
  picUrl: string
  playCount: number // 播放数
}

/**
 * 我的资料
 */
export interface IMyProfile {
  userId: number
  nickname: string
  avatarUrl: string
  gender: number
}
