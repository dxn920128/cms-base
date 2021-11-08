import React from 'react'
import { Menu } from 'antd'
import { KeyOutlined, ExportOutlined } from '@ant-design/icons'
import '../index.less'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/module/user'

const Logout: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <Menu
      style={{
        boxShadow: '0 3px 6px -4px rgb(0 0 0 / 20%), 0 6px 16px 0 rgb(0 0 0 / 20%), 0 9px 28px 8px rgb(0 0 0 / 20%)',
        borderRadius: '4px'
      }}
    >
      <Menu.Item className="logout-item">
        <span>
          <KeyOutlined />
          密码修改
        </span>
      </Menu.Item>
      <Menu.Item
        className="logout-item"
        onClick={() => {
          dispatch(logout())
        }}
      >
        <span>
          <ExportOutlined />
          注销登录
        </span>
      </Menu.Item>
    </Menu>
  )
}

export default Logout
