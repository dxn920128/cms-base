import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, Row, Col, Image } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { setUserInfo } from '../../store/module/user'
import {
    requestVerifyCode,
    requestUserLogin,
    requestAccountInfo
} from '../../services/module/frameApi'
import FrameApi from '../../services/module/frameApiTypings'
import { setToken, getToken } from '../../utils/token'
import './index.less'
import Frame from '../../store/module/frameTypings'

const Login: React.FC = () => {
    const dispatch = useDispatch()

    let verifyCodeKey = ''
    const [imageCode, setImageCode] = useState('')
    const getCaptcha = () => {
        requestVerifyCode().then((res: FrameApi.VerifyCode) => {
            verifyCodeKey = res.key
            setImageCode(res.image)
        })
    }
    useEffect(() => {
      getCaptcha()
    })
    const getAccountInfo = (account_id: number) => {
        requestAccountInfo({ account_id: account_id }).then(
            (res: Frame.UserInfo) => {
                dispatch(
                    setUserInfo({
                        ...res,
                        token: getToken()
                    })
                )
            }
        )
    }
    const userLogin = (v: { account: string; password: string }) => {
        requestUserLogin({
            ...v,
            codeKey: verifyCodeKey,
            code: imageCode
        })
            .then((res: FrameApi.UserLogin) => {
                setToken(res.login_token)
                getAccountInfo(res.account_id)
            })
            .catch(e => {
                console.log(e)
            })
    }
    return (
        <Row className="login-window">
            <Col span={10} offset={14} style={{ padding: '100px 0 0' }}>
                <Form
                    name="basic"
                    onFinish={values => {
                        userLogin(values)
                    }}
                    className="dis-fl fd-c jc-ct ai-ct login-form dlx-left"
                >
                    <div className="login-banner"></div>
                    <div className="login-head"></div>
                    <div className="login-form-label">用户名称：</div>
                    <Form.Item
                        className="login-form-item"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '账号不能为空!'
                            }
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="请输入用户名"
                            size="large"
                        />
                    </Form.Item>
                    <div className="login-form-label">登录密码：</div>
                    <Form.Item
                        className="login-form-item"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '密码不能为空!'
                            }
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="请输入密码"
                            size="large"
                        />
                    </Form.Item>
                    <div className="login-form-label">验证码：</div>
                    <Form.Item
                        className="login-form-item"
                        name="sendcode"
                        validateTrigger="onSubmit"
                        rules={[
                            {
                                validator: (_, value) => {
                                    if (!value) {
                                        return Promise.reject('请输入验证码')
                                    } else {
                                        return Promise.resolve()
                                    }
                                }
                            }
                        ]}
                    >
                        <Input
                            size="large"
                            suffix={
                                <div>
                                    <Image
                                        onClick={e => {
                                            getCaptcha()
                                            e.stopPropagation()
                                        }}
                                        preview={false}
                                        src={imageCode}
                                        style={{ width: 100, height: 30 }}
                                    />
                                </div>
                            }
                            placeholder="请输入验证码"
                        />
                    </Form.Item>
                    <Form.Item className="login-form-item">
                        <Button
                            size="large"
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default Login
