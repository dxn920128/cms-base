import React, { useState } from 'react'
import { Button, Card, Space, Table } from 'antd'
import { TableProps as RcTableProps } from 'rc-table/lib/Table'
import { Key } from 'antd/lib/table/interface'
import Frame from '../../../store/module/frameTypings'

export interface IPermissionTable extends RcTableProps {
  mode?: 'EDIT' | 'SELECT'
  dataSource?: Frame.MenuInfo
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PermissionTable = (props: IPermissionTable) => {
  const defaultKey: Key[] = []
  const [selectedRowKeys, setSelectedRowKeys] = useState(defaultKey)

  const mode = props.mode || 'EDIT'
  const tableTitle = (
    <Space className="dis-fl jc-sb">
      <div>{props.dataSource?.name}</div>
      {props.mode === 'EDIT' && (
        <Space className="mgr-16">
          <Button size="small" type="primary">
            添加
          </Button>
          <Button size="small" type="primary" ghost>
            编辑
          </Button>
          <Button size="small" type="ghost" danger>
            删除
          </Button>
        </Space>
      )}
    </Space>
  )
  const editColumns = [
    {
      title: '',
      dataIndex: 'name'
    },
    {
      title: '',
      width: 30,
      render: () => {
        return (
          <Space size="small">
            <Button type="link" size="small">
              编辑
            </Button>
            <Button type="link" size="small">
              删除
            </Button>
          </Space>
        )
      }
    }
  ]
  const selectColumns = [
    {
      title: '标题',
      dataIndex: 'name'
    }
  ]

  return (
    <Card title={tableTitle}>
      <Table
        bordered
        showHeader={false}
        dataSource={props.dataSource?.childList}
        columns={mode === 'EDIT' ? editColumns : selectColumns}
        size="small"
        rowKey={'menuId'}
        pagination={false}
        rowSelection={
          mode === 'SELECT'
            ? {
                type: 'checkbox',
                selectedRowKeys: selectedRowKeys,
                onChange: (selectedRowKeys: Key[]) => {
                  setSelectedRowKeys(selectedRowKeys)
                }
              }
            : undefined
        }
      />
    </Card>
  )
}

export default PermissionTable
