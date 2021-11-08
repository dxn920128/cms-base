import React from 'react'
import { useSelector } from 'react-redux'
import { Layout, Avatar, Dropdown, Badge, Image } from 'antd'
import { BellOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Notification from './notification'
import Logout from './logout'
import { IStoreState } from '../../../store/types'
import favicon from '../../../assets/images/favicon.png'
import config from '../../../config'
import '../index.less'
import Frame from '../../../store/module/frameTypings'

const Header: React.FC = () => {
  const frameState: Frame.Frame = useSelector<IStoreState, Frame.Frame>(state => state.frame)
  const userState: Frame.UserInfo = useSelector<IStoreState, Frame.UserInfo>(state => state.user)
  return (
    <Layout.Header
      className="ant-layout-header dis-fl jc-sb ai-ct"
      style={{
        padding: '0 4px 0 16px',
        height: '50px',
        borderBottom: ' 1px solid #f0f1f2'
      }}
    >
      <Link to={config.HOME_ROUTER_PATH}>
        <div className="hd-64 mgr-01 dis-fl ai-ct jc-ct">
          <Image width={25} src={favicon} preview={false} />
          <p
            style={{
              fontWeight: 'bold',
              margin: '5px 12px 0',
              fontSize: '16px'
            }}
          >
            {config.ADMIN_NAME}
          </p>
        </div>
      </Link>
      <div className="dis-fl  jc-sb ai-ct">
        <Dropdown overlay={<Notification />} placement="bottomRight">
          <div
            className="login-user"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              transition: 'all 0.3s'
            }}
          >
            <Badge count={frameState.notificationsData && frameState.notificationsData.length}>
              <BellOutlined style={{ verticalAlign: 'middle' }} />
            </Badge>
          </div>
        </Dropdown>
        <Dropdown arrow={false} overlay={<Logout />} placement="bottomCenter">
          <div className="login-user" style={{ cursor: 'pointer', padding: '0 26px' }}>
            <Avatar size="small" icon={<Image src={userState.avatar} />} />
            <span style={{ margin: '0 0 0 10px' }}>{userState.name}</span>
          </div>
        </Dropdown>
      </div>
    </Layout.Header>
  )
}

export default Header
