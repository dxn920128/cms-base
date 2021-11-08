import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Menu } from 'antd'
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import { IStoreState } from '../../../store/types'
import { addTagData, setMenuSelectedKeys, setLeftCollapsed } from '../../../store/module/frame'
import iconList from '../../../utils/iconList'
import { getMenuItemInMenuListByProperty } from '../../../utils'
import config from '../../../config'
import '../index.less'
import Frame from '../../../store/module/frameTypings'

const { SubMenu } = Menu
const { Sider } = Layout

function getMenuIcon(icon: string) {
  for (let i = 0; i < iconList.length; i++) {
    if (icon === iconList[i].iconName) {
      return iconList[i].iconComponent
    }
  }
}

const LeftMenu: React.FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const frameState: Frame.Frame = useSelector<IStoreState, Frame.Frame>(state => state.frame)
  const { menuList } = frameState
  useEffect(() => {
    const item: Frame.MenuInfo = getMenuItemInMenuListByProperty(menuList, 'url', location.pathname)
    if (menuList && item) {
      dispatch(setMenuSelectedKeys([item.menuId]))
    }
  }, [location])

  useEffect(() => {
    const item: Frame.MenuInfo = getMenuItemInMenuListByProperty(menuList, 'url', config.HOME_ROUTER_PATH)
    if (menuList && item) {
      dispatch(addTagData(item))
      dispatch(setMenuSelectedKeys([item.menuId]))
    }
  }, [frameState.menuList])
  return (
    <div>
      <Sider
        trigger={null}
        collapsedWidth={50}
        className="scroll ant-menu"
        style={{
          overflowX: 'hidden',
          zIndex: 1000,
          height: `${document.body.offsetHeight - 50}px`
        }}
        collapsed={frameState.collapsed}
        collapsible
      >
        <div className="layout-sider">
          <div className="pro-sider scroll">
            <Menu
              mode="inline"
              onSelect={v => {
                const item = getMenuItemInMenuListByProperty(menuList, 'menuId', v.key)
                dispatch(addTagData(item))
                dispatch(setMenuSelectedKeys(v.selectedKeys))
              }}
              defaultOpenKeys={frameState.menuSelectedKeys}
              selectedKeys={frameState.menuSelectedKeys}
            >
              {menuList &&
                menuList.length > 0 &&
                menuList.map(item =>
                  item.childList && item.childList.length > 0 ? (
                    <SubMenu key={item.menuId} icon={getMenuIcon(item.icon)} title={item.name}>
                      {item.childList.map((item2: Frame.MenuInfo) => (
                        <Menu.Item key={item2.menuId}>
                          <Link to={item2.url}>{item2.name}</Link>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={item.menuId} icon={<UserOutlined />}>
                      <Link to={item.url}>{item.name}</Link>
                    </Menu.Item>
                  )
                )}
              <div style={{ marginBottom: '10px' }}></div>
            </Menu>
          </div>
          <div
            style={{
              width: '100%',
              cursor: 'pointer',
              fontSize: '16px',
              borderTop: '1px solid #ccc',
              borderRight: '1px solid #f0f2f5'
            }}
            onClick={() => {
              dispatch(setLeftCollapsed(!frameState.collapsed))
            }}
            className="btnbor"
          >
            <div style={{ marginLeft: '16px', padding: '10px 0' }}>
              {React.createElement(frameState.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </div>
          </div>
        </div>
      </Sider>
    </div>
  )
}

export default LeftMenu
