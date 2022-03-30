import { IMenu, IMenuGroup } from "@/components/layout/menu/types"
import { Pages } from "@/router/pages"
import { useRoute, useRouter } from "vue-router"
import { ref, watch } from "vue"
import { Icon } from "@/assets/icon"

export const useMenus = () => {
  const menus: IMenuGroup[] = [
    {
      name: "在线音乐",
      menuList: [
        {
          name: "推荐",
          key: Pages.recommend,
          icon: Icon.recommend,
          theme: "outline"
        },
        {
          name: "音乐馆",
          key: "music",
          icon: Icon.music,
          theme: "outline"
        },
        {
          name: "电台",
          key: "dj",
          icon: Icon.radioStation,
          theme: "outline"
        }
      ]
    },
    {
      name: "我的音乐",
      menuList: [
        {
          name: "我喜欢",
          key: "123",
          icon: Icon.collection,
          theme: "outline"
        },
        {
          name: "本地和下载",
          key: "1222",
          icon: Icon.local,
          theme: "outline"
        },
        {
          name: "试听列表",
          key: "2222",
          icon: Icon.musicList,
          theme: "outline"
        }
      ]
    }
  ]

  const route = useRoute()
  const currentKey = ref<string>(route.meta.menu as string)

  watch<string>(
    () => route.meta.menu as string,
    (menu) => {
      currentKey.value = menu
    }
  )

  const router = useRouter()

  const click = async (menu: IMenu) => {
    await router.push({ name: menu.key, replace: true })
  }

  return { menus, currentKey, click }
}
