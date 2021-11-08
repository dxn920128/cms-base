
const baseUrl = {
  url:'/cmsApi'
}

const requestUrl = {
  loginUrl: `${baseUrl.url}/admin/auth/login`, // 登录
  verifyCodeUrl: `${baseUrl.url}/admin/auth/verify_code`,//验证码

  accountAddUrl: `${baseUrl.url}/admin/account/add`,//添加账号接口
  accountUpdateUrl: `${baseUrl.url}/admin/account/update`,//修改账号接口
  getAccountInfoUrl: `${baseUrl.url}/admin/account/info`,//获取账号信息
  accountUpdatePasswordUrl: `${baseUrl.url}/admin/account/update_password`,//修改账号密码
  getAccountInfoListUrl: `${baseUrl.url}/admin/account/infoList`//获取账号列表信息

}
export default requestUrl
