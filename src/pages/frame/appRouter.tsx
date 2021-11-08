import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../login/index'
import { isLogin } from '../../utils/token'

import Frame from './index'
class AppRoute extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              if (isLogin()) {
                return <Frame />
              } else {
                return <Redirect to="/login" />
              }
            }}
          />
        </Switch>
      </HashRouter>
    )
  }
}


export default AppRoute
