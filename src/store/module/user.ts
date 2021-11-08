import { Reducer } from 'redux'
import { IAction } from '../types'
import LocalStore from '../../utils/store'
import { setToken, getToken, removeToken } from '../../utils/token'
import Frame from './frameTypings'

const USER_KEY = 'Admin-user-info'
const localUser = LocalStore.getValue<Frame.UserInfo>(USER_KEY) || {}

const initUser: Frame.UserInfo = {
  token: getToken(),
  avatar: undefined,
  account_id: -1,
  name: '',
  given_name: '',
  email: '',
  phone: '',
  mobile: '',
  status: 0,
  ...localUser
}
//设置账号信息
const SET_USER_INFO = 'SET_USER_INFO'
//退出登录
const SET_USER_LOGOUT = 'SET_USER_LOGOUT'

export const setUserInfo: (user: Frame.UserInfo) => IAction<Frame.UserInfo> = (user: Frame.UserInfo) => ({
  type: SET_USER_INFO,
  payload: user
})

export const logout: () => IAction<null> = () => ({
  type: SET_USER_LOGOUT,
  payload: null
})

const userReducer: Reducer<Frame.UserInfo, IAction<any>> = (
  state = initUser,
  action: IAction<any>
) => {
  const { type, payload } = action

  switch (type) {
    case SET_USER_INFO:
      LocalStore.setValue(USER_KEY, payload)
      setToken(payload.token)
      window.location.href = '/home'
      return {
        ...payload
      }
    case SET_USER_LOGOUT:
      LocalStore.removeValue(USER_KEY)
      removeToken()
      window.location.href = '/login'
      return {
        ...initUser
      }
    default:
      return state
  }
}

export default userReducer