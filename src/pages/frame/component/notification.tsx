import React from 'react'
import { useSelector } from 'react-redux'
import { List } from 'antd'
import { IStoreState } from '../../../store/types'
import Frame from '../../../store/module/frameTypings'

import '../index.less'

const Notification: React.FC = () => {
  const frameState: Frame.Frame = useSelector<IStoreState, Frame.Frame>(state => state.frame)
  const { notificationsData } = frameState
  if (notificationsData == null || notificationsData.length === 0) {
    return <div />
  }
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 5,
        boxShadow: '2px 10px 10px 10px #f2f2f2'
      }}
    >
      <List
        className="not-list"
        bordered={false}
        itemLayout="horizontal"
        dataSource={notificationsData}
        renderItem={(item: string, index) => (
          <List.Item key={index} className="not-list-item">
            <List.Item.Meta
              title={
                <div className="not-list-item-title" style={{ marginRight: 16, marginLeft: 16 }}>
                  {item}
                  <div className="not-list-item-time">{item}</div>
                </div>
              }
              description={
                <div className="not-list-item-description" style={{ marginRight: 16, marginLeft: 16 }}>
                  {item}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Notification
