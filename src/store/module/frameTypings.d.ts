declare module 'Frame' {
}

export interface MenuInfo {
  menuId: string,
  name: string,
  icon: string,
  type: string,
  url: string
  childList?: Array<any>
}
export interface UserInfo {
  account_id: number,
  name: string,
  given_name: string,
  email: string,
  avatar: string | undefined;
  phone: string,
  mobile: string,
  status: number,
  token: string;
}

export interface Frame {
  menuList: Array<MenuInfo>,
  notificationsData: Array<string>,
  collapsed: boolean,
  menuSelectedKeys: Array<string>,
  taglist: Array<MenuInfo>
}