import "vue-router"

export const Types = {
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
  },
  musicListDetail: {
    name: "music-list-detail",
    children: null
  }
}

declare module "vue-router" {
  interface RouteMeta {
    keepAlive: boolean
    menu?: string
  }
}
