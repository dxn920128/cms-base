import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store/index'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import AppRouter from './pages/frame/appRouter'
import './assets/style/index.less'
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)

reportWebVitals()
