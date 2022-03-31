import lycRequest from "@/service"

enum MusicHallApi {
  topMusicList = "top/playlist"
}

/**
 * 获取歌单
 */
export function getTopMusicList() {
  return lycRequest.get({
    url: MusicHallApi.topMusicList
  })
}
