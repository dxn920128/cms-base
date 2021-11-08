

const menuList = [
  {
    icon: 'Audit',
    name: '首页',
    menuId: '1',
    type: '0',
    url: '',
    childList: [
      {
        menuId: '2',
        name: '首页',
        url: '/home',
        type: '1'
      }
    ]
  },
  {
    menuId: '3',
    type: '0',
    icon: 'Audit',
    name: '系统设置',
    url: '',
    childList: [
      {
        menuId: '4',
        name: '账号管理',
        type: '1',
        url: '/system-account'
      },
      {
        menuId: '5',
        name: '权限分配',
        type: '1',
        url: '/system-permission'
      }
    ]
  },{
    menuId: '115',
    type: '0',
    icon: 'Audit',
    name: '测试',
    url: '',
    childList: [
      {
        menuId: '116',
        name: '测试1',
        type: '1',
        url: '/test?test=1'
      },
      {
        menuId: '117',
        name: '测试2',
        type: '1',
        url: '/test?test=2'
      }
    ]
  }
]

export default menuList