import { Types } from "@/router/types"
import { useRoute, useRouter } from "vue-router"
import { ref, watch } from "vue"

export const useTabs = () => {
  const tabs: Tab[] = [
    {
      label: "精选",
      name: Types.musicHall.children.selection.name
    },
    {
      label: "排行榜",
      name: Types.musicHall.children.rankingList.name
    },
    {
      label: "歌手",
      name: Types.musicHall.children.singer.name
    },
    {
      label: "分类歌单",
      name: Types.musicHall.children.musicList.name
    }
  ]

  const route = useRoute()

  const currentName = ref<string>(route.name as string)

  watch<string>(
    () => route.name as string,
    (name) => (currentName.value = name)
  )

  const router = useRouter()

  const click = async ({ props }: { props: Tab }) => {
    await router.push({ name: props.name, replace: true })
  }

  return { tabs, currentName, click }
}
