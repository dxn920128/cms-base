var Mock = require('mockjs')

var accountInfoList = Mock.mock({
  'list|30': [{
    'account_id|+1': '@increment(100)',
    'avatar': 'https://img0.baidu.com/it/u=1077360284,2857506492&fm=26&fmt=auto',
    'name': '@title(2)',
    'given_name': "@cname",
    'email': '@email',
    'phone': '@phone',
    'mobile': '',
    'status': '@integer(0, 1)'
  }],
  pagination: {
    total_num: 300, // 数据总条数
    total_page: 30, // 总页数
    page_size: 10, // 每一页条数
    page_num: 2, // 当前页码
    has_more: 0, // 下一页是否有数据 默认 0 是 1 否
  }
})

module.exports = [
  {
    method: 'GET',
    path: '/admin/account/infoList',
    data: {
      code: 0,
      data: accountInfoList
    }
  }
]