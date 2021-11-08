import React, { useState } from 'react'
import { Button, Form, Input, Tag } from 'antd'
import TableLayout from '../../component/TableLayout'
import SearchLayout from '../../component/SearchLayout'
import { getAccountInfoList } from '../../services/module/systemApi'
import Frame from '../../store/module/frameTypings'
import FrameApi from '../../services/module/frameApiTypings'


const columns = [
  {
    title: '序号', //列名称
    width: 50,
    render: (tr: any, tx: any, index: number) => {
      return index + 1
    }
  },
  {
    title: '用户id',
    dataIndex: 'account_id',
    key: 'account_id',
    ellipsis: true
  },
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true
  },
  {
    title: '姓名',
    dataIndex: 'given_name',
    key: 'given_name',
    ellipsis: true
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    ellipsis: true
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
    ellipsis: true
  },
  {
    title: '手机',
    dataIndex: 'mobile',
    key: 'mobile',
    ellipsis: true
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
    render: (text: number) => {
      return <div>{text === 0 ? <Tag color="blue">正常</Tag> : <Tag color="error">删除</Tag>}</div>
    }
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
    ellipsis: true
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
    ellipsis: true
  }
]

const Account: React.FC = () => {
  const [searchHeight, setSearchHeight] = useState(0)
  const [dataSource, setDataSource] = useState(Array)
  const [total, setTotal] = useState(0)

  return (
    <div className="dis-fl jc-sb fd-c">
      <SearchLayout
        searchExpand={v => {
          if (v) {
            setSearchHeight(0)
          } else {
            setSearchHeight(56)
          }
        }}
        onFinish={v => {
          getAccountInfoList({}).then((r: FrameApi.ResponsePaginationData<Frame.UserInfo>) => {
            setDataSource(r.list)
            setTotal(r.pagination.total_num)
          })
        }}
      >
        <Form.Item name={'name1'} label="创建者">
          <Input placeholder="请输入创建者" allowClear={true} />
        </Form.Item>
        <Form.Item name={'name2'} label="创建者">
          <Input placeholder="请输入创建者" allowClear={true} />
        </Form.Item>
        <Form.Item name={'name3'} label="创建者">
          <Input placeholder="请输入创建者" allowClear={true} />
        </Form.Item>
        <Form.Item name={'name4'} label="创建者">
          <Input placeholder="请输入创建者" allowClear={true} />
        </Form.Item>
        <Form.Item name={'name4'} label="创建者">
          <Input placeholder="请输入创建者" allowClear={true} />
        </Form.Item>
      </SearchLayout>
      <div className="pd-16 dis-fl jc-sb">
        <h1 style={{ fontSize: '16px' }}>账号管理</h1>
        <Button type="primary">添加用户</Button>
      </div>
      <TableLayout searchHeight={searchHeight} total={total} columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default Account
