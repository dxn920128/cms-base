
import service from '../index'
import requestUrl from '../urlComfig'
import Frame from '../../store/module/frameTypings'
import FrameApi from './frameApiTypings'

//登录
export function requestUserLogin(data: { account: string, password: string, codeKey: string, code: string }):
  Promise<FrameApi.UserLogin> {
  return service.post<FrameApi.UserLogin>(requestUrl.loginUrl, data)
}

//获取验证码
export function requestVerifyCode(): Promise<FrameApi.VerifyCode> {
  return service.post<FrameApi.VerifyCode>(requestUrl.verifyCodeUrl)
}

export function requestAccountInfo(data: { account_id: number }): Promise<Frame.UserInfo> {
  return service.get<Frame.UserInfo>(requestUrl.getAccountInfoUrl, data)
}
