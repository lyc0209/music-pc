import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import { Pages } from "@/router/pages"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: Pages.index.name,
    component: () => import("@/views/Index.vue"),
    redirect: { name: Pages.recommend.name },
    children: [
      {
        path: "recommend",
        name: Pages.recommend.name,
        component: () => import("@/views/recommend/Recommend.vue"),
        meta: {
          menu: Pages.recommend.name,
          keepAlive: true
        }
      },
      {
        path: "music-hall",
        name: Pages.musicHall.name,
        component: () =>
          import(/* webpackChunkName: "music-hall" */ "@/views/music-hall/MusicHall.vue"),
        redirect: { name: Pages.musicHall.children.selection.name },
        meta: {
          menu: Pages.musicHall.name,
          keepAlive: true
        },
        children: [
          {
            path: "selection",
            name: Pages.musicHall.children.selection.name,
            component: () => import("@/components/layout/music-hall/Selection.vue"),
            meta: {
              menu: Pages.musicHall.name,
              keepAlive: true
            }
          },
          {
            path: "music-list",
            name: Pages.musicHall.children.musicList.name,
            component: () => import("@/components/layout/music-hall/HallMusicList.vue"),
            meta: {
              menu: Pages.musicHall.name,
              keepAlive: true
            }
          }
        ]
      },
      {
        path: "music-list-detail",
        name: Pages.musicListDetail.name,
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
