import lycRequest from "@/service"
import * as url from "url"

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
