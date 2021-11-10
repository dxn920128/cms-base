import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Scrollbars } from 'rc-scrollbars'
import { useLocation, useHistory } from 'react-router-dom'
import { Tag, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { IStoreState } from '../../../store/types'
import { closeAllTags, closeOtherTags, deleteTags } from '../../../store/module/frame'
import { getMenuItemInMenuListByProperty } from '../../../utils'
import Frame from '../../../store/module/frameTypings'
import config from '../../../config'
import '../index.less'

const TagList: React.FC = () => {
  const dispatch = useDispatch()
  const frameState: Frame.Frame = useSelector<IStoreState, Frame.Frame>(state => state.frame)
  const { taglist } = frameState
  const history = useHistory()
  const location = useLocation()
  const currentPath = location.pathname

  const menuItem = (
    <Menu
      onClick={v => {
        switch (v.key) {
          case '2':
            dispatch(closeOtherTags(currentPath))
            break
          case '3':
            const item: Frame.MenuInfo = getMenuItemInMenuListByProperty(
              frameState.menuList,
              'url',
              config.HOME_ROUTER_PATH
            )
            if (frameState.menuList && item) {
              history.push(config.HOME_ROUTER_PATH)
            }
            dispatch(closeAllTags(currentPath))
            break
        }
      }}
    >
      <Menu.Item key="2">关闭其他标签页</Menu.Item>
      <Menu.Item key="3">关闭全部标签页</Menu.Item>
    </Menu>
  )
  return (
    <div className="tagsView-container dis-fl fd-r">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        hideTracksWhenNotNeeded={true}
        renderView={props => <div {...props} className="scrollbar-container" />}
        renderTrackVertical={props => <div {...props} className="scrollbar-track-vertical" />}
      >
        <ul className="tags-wrap">
          {taglist.map(tag => (
            <li key={tag.menuId}>
              <Tag
                onClose={() => {
                  const item = taglist[taglist.indexOf(tag) - 1]
                  if (item) {
                    history.push(item.url)
                  }
                  dispatch(deleteTags(tag.url))
                }}
                closable={!(config.HOME_ROUTER_PATH === tag.url)}
                color={currentPath === tag.url ? 'processing':'warning' }
                onClick={() => {
                  history.push(tag.url)
                }}
              >
                {tag.name}
              </Tag>
            </li>
          ))}
        </ul>
      </Scrollbars>
      <div style={{ zIndex: 100 }}>
        <Dropdown overlay={menuItem} placement="bottomLeft">
          <Tag className="mgr-16" color='error'>
            关闭
            <DownOutlined />
          </Tag>
        </Dropdown>
      </div>
    </div>
  )
}

export default TagList
