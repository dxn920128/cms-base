import { message } from 'antd'
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import qs from 'qs'
import { getToken } from '../utils/token'
import { getUuid } from '../utils'
import store from '../store/index'
import { logout } from '../store/module/user'

export interface ResponseData<T> {
  code: number;
  tips: string;
  data: T;
  message: string;
}

const service = axios.create({
  timeout: 2 * 60 * 1000,// 请求超时时间
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.params) {
      for (const item in config.params) {
        if (item === null) {
          delete config.params[item]
        }
      }
    }
    if (config && config.headers) {
      const token = getToken()
      if (token) {
        config.headers['X-KT-Login-Token'] = token
      }
      config.headers['X-KT-Request-Id'] = getUuid()
      config.headers['X-KT-Timestamp'] = new Date().getTime().toString()
      config.headers['X-KT-Debug'] = '0'
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    const res = response.data
    switch (res.code) {
      case 0://正常数据
        return response
      case 10104://登录超时
        store.dispatch(logout())
        window.location.href = `${window.location.origin}`
        return Promise.reject(res.message)
    }
    message.error(response.data.message)
    return Promise.reject(new Error(response.data.message))
  },
  (error) => {
    return Promise.reject(error)
  }
)

const httpRequest = {
  get<T>(url: string, params = {}): Promise<T> {
    const options: AxiosRequestConfig = {
      url: url,
      method: 'GET',
      params: params,
      responseType: 'json'
    }
    return new Promise((resolve, reject) => {
      service(options)
        .then((res: AxiosResponse<ResponseData<T>>) => {
          return resolve(res.data.data)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  },
  post<T>(url: string, params = {}): Promise<T> {
    const options: AxiosRequestConfig = {
      url: url,
      method: 'POST',
      params: params,
      data: qs.stringify(params),
      responseType: 'json'
    }

    return new Promise((resolve, reject) => {
      service(options)
        .then((res: AxiosResponse<ResponseData<T>>) => {
          return resolve(res.data.data)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  },
  postFile<T>(url: string, params = {}): Promise<T> {
    const options: AxiosRequestConfig = {
      url: url,
      method: 'POST',
      data: qs.stringify(params),
      responseType: 'json'
    }
    return new Promise((resolve, reject) => {
      service(options)
        .then((res: AxiosResponse<ResponseData<T>>) => {
          return resolve(res.data.data)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }
}

export default httpRequest
