import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import { Types } from "@/router/types"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: Types.index.name,
    component: () => import("@/views/Index.vue"),
    redirect: { name: Types.recommend.name },
    children: [
      {
        path: "recommend",
        name: Types.recommend.name,
        component: () => import("@/views/recommend/Recommend.vue"),
        meta: {
          menu: Types.recommend.name,
          keepAlive: true
        }
      },
      {
        path: "music-hall",
        name: Types.musicHall.name,
        component: () =>
          import(/* webpackChunkName: "music-hall" */ "@/views/music-hall/MusicHall.vue"),
        redirect: { name: Types.musicHall.children.selection.name },
        meta: {
          menu: Types.musicHall.name,
          keepAlive: true
        },
        children: [
          {
            path: "selection",
            name: Types.musicHall.children.selection.name,
            component: () => import("@/components/layout/music-hall/Selection.vue"),
            meta: {
              menu: Types.musicHall.name,
              keepAlive: true
            }
          },
          {
            path: "music-list",
            name: Types.musicHall.children.musicList.name,
            component: () => import("@/components/layout/music-hall/HallMusicList.vue"),
            meta: {
              menu: Types.musicHall.name,
              keepAlive: true
            }
          }
        ]
      },
      {
        path: "music-list-detail",
        name: Types.musicListDetail.name,
        component: () => import("@/views/music-list-detail/MusicListDetail.vue"),
        meta: {
          menu: "",
          keepAlive: false
        }
      }
    ]
  }
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
