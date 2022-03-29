import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import { Pages } from "@/router/pages"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: Pages.index,
    component: () => import("@/views/Index.vue"),
    redirect: { name: Pages.recommend },
    children: [
      {
        path: "recommend",
        name: Pages.recommend,
        component: () => import("@/views/recommend/Recommend.vue"),
        meta: {
          menu: Pages.recommend,
          keepAlive: true
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
