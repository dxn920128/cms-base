import React, { useState, useRef } from 'react'
import { Form, Row, Col, Space, Button, FormItemProps, FormInstance } from 'antd'
import { Callbacks } from 'rc-field-form/lib/interface'
import { UpOutlined, DownOutlined } from '@ant-design/icons'

export interface IFormLayout<Values = any> extends FormItemProps<Values> {
  children?: React.ReactNode
  onFinish?: Callbacks<Values>['onFinish']
  ref?: React.Ref<FormInstance<Values>> | undefined
  searchExpand?: (isExpand: boolean) => void
}

const FormLayout = (props: IFormLayout) => {
  const [form] = Form.useForm()
  const [searchExpand, setSearchExpand] = useState(true)
  const childrenCount = React.Children.count(props.children)
  const searchRef = useRef<FormInstance<any>>(null)
  return (
    <div
      className="dis-fl fd-r jc-sb"
      style={{
        padding: '19px 19px 0px 19px',
        borderBottom: '1px solid #d8dce5'
      }}
    >
      <Form
        onKeyDown={e => {
          if (e.key === 'Enter') {
            form.submit()
          }
        }}
        ref={searchRef}
        form={form}
        onFinish={props.onFinish}
        labelCol={props.labelCol || { span: 6 }}
        wrapperCol={props.wrapperCol || { span: 16 }}
        style={{ width: '100%', marginRight: 16 }}
      >
        <Row>
          {React.Children.map(props.children, (child, index) => {
            if (searchExpand && index > 3) {
              return
            }
            return (
              <Col span={6} key={index}>
                {child}
              </Col>
            )
          })}
        </Row>
      </Form>
      <Col flex={1} className=" dis-fl fd-r jc-fe" style={{ alignItems: 'start' }}>
        <Space>
          <Button
            onClick={() => {
              form.submit()
            }}
            type="primary"
          >
            查询
          </Button>
          <Button
            type="ghost"
            onClick={() => {
              form.resetFields()
            }}
          >
            重置
          </Button>
          {childrenCount > 4 && (
            <Button
              type="link"
              onClick={() => {
                setSearchExpand(!searchExpand)
                props.searchExpand && props.searchExpand(!searchExpand)
              }}
            >
              {!searchExpand ? <UpOutlined /> : <DownOutlined />} {!searchExpand ? '隐藏' : '展开'}
            </Button>
          )}
        </Space>
      </Col>
    </div>
  )
}

export default FormLayout
