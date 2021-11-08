import { Reducer } from 'redux'
import { IAction } from '../types'
import config from '../../config'
import Frame from './frameTypings'

const initHome: Frame.Frame = {
  menuList: [], //导航菜单
  notificationsData: [], //系统通知
  collapsed: false, //菜单缩放
  menuSelectedKeys: [], //菜单选中
  taglist: [] //最近打开菜单
}

//设置左侧菜单缩放
const SET_LEFT_COLLAPSED = 'SET_LEFT_COLLAPSED'
export const setLeftCollapsed: (collapsed: boolean) => IAction<boolean> = (collapsed: boolean) => ({
  type: SET_LEFT_COLLAPSED,
  payload: collapsed
})

//设置左侧菜单
const SET_LEFT_MENU = 'SET_LEFT_MENU'
export const setLeftMenu: (menu: Array<Frame.MenuInfo>) => IAction<Array<Frame.MenuInfo>> = (menu: Array<Frame.MenuInfo>) => ({
  type: SET_LEFT_MENU,
  payload: menu
})

const SET_MENU_SELECT_KEY = 'SET_MENU_SELECT_KEY'
export const setMenuSelectedKeys: (menuSelectedKeys: Array<string>) =>
  IAction<Array<string>> = (menuSelectedKeys: Array<string>) => ({
    type: SET_MENU_SELECT_KEY,
    payload: menuSelectedKeys
  })

//添加标签
const TAGSVIEW_ADD_TAG = 'TAGSVIEW_ADD_TAG'
export const addTagData: (addTag: Frame.MenuInfo) =>
  IAction<Frame.MenuInfo> = (addTag: Frame.MenuInfo) => ({
    type: TAGSVIEW_ADD_TAG,
    payload: addTag
  })
//删除指定标签
const TAGSVIEW_DELETE_TAG = 'TAGSVIEW_DELETE_TAG'
export const deleteTags: (tagKey: string) =>
  IAction<string> = (tagKey: string) => ({
    type: TAGSVIEW_DELETE_TAG,
    payload: tagKey
  })

//关闭其他标签
const TAGSVIEW_CLOSE_OTHER_TAGS = 'TAGSVIEW_CLOSE_OTHER_TAGS'
export const closeOtherTags: (tagKey: string) =>
  IAction<string> = (tagKey: string) => ({
    type: TAGSVIEW_CLOSE_OTHER_TAGS,
    payload: tagKey
  })

//关闭其他标签
const TAGSVIEW_CLOSE_ALL_TAGS = 'TAGSVIEW_CLOSE_ALL_TAGS'
export const closeAllTags: (tagKey: string) =>
  IAction<string> = (tagKey: string) => ({
    type: TAGSVIEW_CLOSE_ALL_TAGS,
    payload: tagKey
  })

const userReducer: Reducer<Frame.Frame, IAction<any>> = (
  state = initHome,
  action: IAction<any>
) => {
  const { type, payload } = action
  switch (type) {
    case SET_LEFT_COLLAPSED:
      return {
        ...state,
        collapsed: payload
      }
    case SET_LEFT_MENU:
      return {
        ...state,
        menuList: payload,
        taglist: [
          ...payload.filter((item: Frame.MenuInfo) => item.url === config.HOME_ROUTER_PATH)
        ]
      }
    case SET_MENU_SELECT_KEY:
      return {
        ...state,
        menuSelectedKeys: payload
      }
    case TAGSVIEW_ADD_TAG:
      if (state.taglist.includes(payload)) {
        return state
      } else {
        return {
          ...state,
          taglist: [...state.taglist, payload]
        }
      }
    case TAGSVIEW_CLOSE_OTHER_TAGS:
      return {
        ...state,
        taglist: [
          ...state.taglist.filter((item) => item.url === config.HOME_ROUTER_PATH || item.url === payload)
        ]
      }
    case TAGSVIEW_CLOSE_ALL_TAGS:
      return {
        ...state,
        taglist: [
          ...state.taglist.filter((item) => item.url === config.HOME_ROUTER_PATH)
        ]
      }
    case TAGSVIEW_DELETE_TAG:
      return {
        ...state,
        taglist: [...state.taglist.filter((item) => item.url !== payload)]
      }
    default:
      return state
  }
}

export default userReducer