import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from './component/header'
import LeftMenu from './component/leftMenu'
import Content from './component/content'

import store from '../../store'
import { setLeftMenu } from '../../store/module/frame'
import menu from '../../config/menu'
import TagList from './component/TagList'

class Frame extends Component {
  componentDidMount() {
    store.dispatch(setLeftMenu(menu))
  }
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <LeftMenu />
          <Layout>
            <div className="tagsView-container">
              <TagList />
            </div>
            <Content />
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Frame
