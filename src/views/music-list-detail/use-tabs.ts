import { useRoute, useRouter } from "vue-router"
import { ref, watch } from "vue"

export const useTabs = () => {
  const tabs: Tab[] = [
    {
      label: "歌曲",
      name: "song-list"
    },
    {
      label: "评论",
      name: "comment-list"
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
