interface Page {
  name: string
  children: Page[] | null
}

export const Pages = {
  index: {
    name: "index",
    children: null
  },
  recommend: {
    name: "recommend",
    children: null
  },
  musicHall: {
    name: "music-hall",
    children: {
      selection: {
        name: "selection",
        children: null
      },
      rankingList: {
        name: "ranking-list",
        children: null
      },
      singer: {
        name: "singer",
        children: null
      },
      musicList: {
        name: "music-list",
        children: null
      }
    }
  }
}

// export const Pages = {
//   index: "index",
//   recommend: "recommend",
//   musicHall: "music-hall",
//   selection: "selection", // 精选
//   rankingList: "ranking-list", // 排行榜
//   singer: "singer", // 歌手
//   musicList: "music-list"
// }
