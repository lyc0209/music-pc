import lycRequest from "@/service"

enum RecommendApi {
  Banner = "banner",
  musicList = "personalized"
}

/**
 * 获取轮播图
 */
export function getBannerList() {
  return lycRequest.get({
    url: RecommendApi.Banner
  })
}

/**
 * 获取推荐歌单
 * @param data 传参
 */
export function getMusicList(data: { limit: number }) {
  return lycRequest.get({
    url: `${RecommendApi.musicList}?limit=${data.limit}`
  })
}
