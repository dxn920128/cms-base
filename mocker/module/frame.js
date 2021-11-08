var Mock = require('mockjs')

module.exports = [
  {
    method: 'POST',
    path: '/admin/auth/login',
    data: { code: 0, data: { login_token: '1111111111', account_id: 123456 } }
  },
  {
    method: 'POST',
    path: '/admin/auth/logout',
    data: { code: 0 }
  },
  {
    method: 'POST',
    path: '/admin/auth/verify_code',
    data: { code: 0, data: { image: Mock.Random.image('100x30', '#894FC4', '#FFF', 'png', '111111'), key: '22s' } }
  },
  {
    method: 'GET',
    path: '/admin/account/info',
    data: {
      code: 0,
      data: {
        avatar: 'https://img0.baidu.com/it/u=1077360284,2857506492&fm=26&fmt=auto',
        account_id: 1111,
        name: 'dingxn',
        given_name: 'dingxn',
        email: '',
        phone: '',
        mobile: '',
        status: 0
      }
    }
  },
  {
    method: 'GET',
    path: '/admin/menu/nav',
    data: {
      code: 0,
      data: [
        {
          icon: 'Audit',
          name: '测试',
          menuId: 1,
          type: '0',
          childList: [
            {
              menuId: 2,
              name: '菜单',
              url: '/cms-home',
              type: '1'
            }
          ]
        },
        {
          menuId: 3,
          type: '0',
          icon: 'Audit',
          name: '云鹿统计',
          childList: [
            {
              menuId: 4,
              name: '数据大屏',
              type: '1',
              url: '/cms-home1'
            }
          ]
        }
      ]
    }
  }]