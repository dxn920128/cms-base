import { createStore, combineReducers, applyMiddleware, Middleware, Reducer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { IStoreState, IAction } from './types'
import userReducer from './module/user'
import frameReducer from './module/frame'

const reducers: Reducer<IStoreState, IAction<any>> = combineReducers<IStoreState>({
  user: userReducer,//登录人信息
  frame: frameReducer//首页框架信息
})
//thunk redux支持异步请求
const middleware: Middleware[] = [thunk]
//开发模式引入redux-logger
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

function createMyStore() {
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))
  return store
}

const store = createMyStore()

export default store