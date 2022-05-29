import lycRequest from "@/service"

enum SongListApi {
  songList = "/song/detail"
}

/**
 * 获取歌单详情
 * @param ids
 */
export function getSongList(ids: string) {
  return lycRequest.get({
    url: `${SongListApi.songList}?ids=${ids}`
  })
}
