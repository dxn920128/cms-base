
import { lazy } from 'react'

const Home = lazy(() => import(/* webpackChunkName: 'data' */ '../pages/home'))
const Error = lazy(() => import(/* webpackChunkName: 'error' */ '../pages/404/index'))
const Test = lazy(() => import(/* webpackChunkName: 'error' */ '../pages/test'))

const SystemAccount = lazy(() => import(/* webpackChunkName: 'SystemAdmin' */ '../pages/system/account'))
const Permission = lazy(() => import(/* webpackChunkName: 'SystemAdmin' */ '../pages/system/permission'))


const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/404',
    component: Error
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/system-account',
    component: SystemAccount
  },
  {
    path: '/system-permission',
    component: Permission
  }

]

export default routes