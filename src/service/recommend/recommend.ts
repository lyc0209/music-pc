import lycRequest from "@/service"

enum RecommendApi {
  Banner = "banner"
}

/**
 * 获取轮播图
 */
export function getBannerList() {
  return lycRequest.get({
    url: RecommendApi.Banner
  })
}
