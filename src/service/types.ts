export interface IDataType<T = any> {
  code: number
  data: T
  msg: string
}

/**
 * 歌单卡片
 */
export interface IMusicItem {
  id: number
  name: string
  picUrl: string
  playCount: number // 播放数
}

/**
 * 我的资料/用户信息
 */
export interface IUser {
  userId: number
  nickname: string
  avatarUrl: string
  gender: number
  signature: string //个性签名
}

/**
 * 歌单详情
 */
export interface IMusicListDetail {
  id: number
  name: number
  coverImgUrl: string // 歌单封面
  playCount: number
  description: string
  tags: string[]
  subscribedCount: number // 收藏数量
  shareCount: number // 分享数量
  commentCount: number // 评论数量
  createTime: string
  creator: IUser
  trackIds: { id: string }[]
}

/**
 * 歌曲信息
 */
export interface ISong {
  id: number
  name: string
  dt: number // 歌曲时长
  ar: { id: number; name: string }[] //歌手列表
  al: { id: number; name: string; picUrl: string } | null // 专辑信息
}
