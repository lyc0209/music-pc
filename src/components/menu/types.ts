interface IMenu {
  name: string
  key: string
  icon: string
  theme: string
}
interface IMenuGroup {
  name: string
  menuList: IMenu[]
}

export { IMenu, IMenuGroup }
