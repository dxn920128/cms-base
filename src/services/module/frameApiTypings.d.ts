export interface UserLogin {
  login_token: string,
  account_id: number
}

export interface VerifyCode {
  image: string,
  key: string
}

export interface ResponsePaginationData<T>{
  list:Array<T>,
  pagination:{
    total_num: number, // 数据总条数
    total_page: number, // 总页数
    page_size: number, // 每一页条数
    page_num: number, // 当前页码
    has_more: number, // 下一页是否有数据 默认 0 是 1 否
  }
}