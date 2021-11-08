
import service from '../index'
import requestUrl from '../urlComfig'
import Frame from '../../store/module/frameTypings'
import FrameApi from './frameApiTypings'

//获取账号信息
export function getAccountInfoList(data: { account?: string }):
  Promise<FrameApi.ResponsePaginationData<Frame.UserInfo>> {
  return service.get<FrameApi.ResponsePaginationData<Frame.UserInfo>>(requestUrl.getAccountInfoListUrl, data)
}
