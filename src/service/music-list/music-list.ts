import lycRequest from "@/service"

enum MusicListApi {
  musicListDetail = "playlist/detail"
}

/**
 * 获取歌单详情
 * @param id 歌单id
 */
export function getMusicListDetail(id: number) {
  return lycRequest.get({
    url: `${MusicListApi.musicListDetail}?id=${id}`
  })
}
