import React from 'react'
import { List } from 'antd'
import PermissionTable from './component/permissionTable'
import menu from '../../config/menu'
const Permission: React.FC = () => {
  return (
    <div className="dis-fl jc-sb fd-c mg-16">
      <List
        grid={{
          column: 3,
          gutter: 16
        }}
        dataSource={menu}
        renderItem={item => (
          <List.Item>
            <PermissionTable mode="SELECT" dataSource={item} />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Permission
