import React, { Suspense } from 'react'
import { Layout, Spin } from 'antd'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import '../index.less'
import routes from '../../../config/routes'
import config from '../../../config'

const ContentLayout: React.FC = () => {
  const location = useLocation()
  return (
    <Layout.Content className="dis-fl fd-c" style={{ marginRight: 16 }}>
      <Suspense
        fallback={
          <div className="dis-fl jc-ct ai-ct" style={{ height: '100vh' }}>
            <Spin size="large" />
          </div>
        }
      >
        <Switch location={location}>
          <Redirect exact from="/" to={config.HOME_ROUTER_PATH} />
          {routes.map(route => {
            return <Route component={route.component} key={route.path} path={route.path} />
          })}
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Layout.Content>
  )
}

export default ContentLayout
