## 功能
```
> - 登录 注销 演示页面
> - 全局功能
   动态侧边栏
  多页面切换
> - Redux状态管理
> -  Mocker 数据
> - webpack 打包优化 antd按需加载
> - hooks
```


<div align=center>
<img src="https://gitee.com/dingxn/blog-img/raw/master/cms-base/QQ20211107-225848@2x.png" width="700"  />
</div>

## 目录结构

```
├── README.md
├── craco.config.js
├── mocker
├── package-lock.json
├── package.json            # package.json
├── public                  # 静态资源
├── src
│   ├── assets              #静态资源
│   │   ├── images          #图片
│   │   └── style           #全局样式
│   ├── component
│   ├── config              #全局配置
│   │   ├── index.ts
│   │   ├── menu.ts
│   │   └── routes.ts
│   ├── index.tsx           #入口文件
│   ├── logo.svg
│   ├── pages               #页面
│   │   ├── 404             #404页面
│   │   ├── frame           #框架页面
│   │   │   ├── appRouter.tsx
│   │   ├── home
│   │   ├── login           #登录页面
│   ├── services            #接口
│   ├── store               #全局stores
│   │   ├── index.ts
│   │   └── types.ts
│   └── utils               #工具类
├── tsconfig.json
└── yarn.lock
```
## 安装 
1.下载项目代码

```
https://github.com/dxn920128/cms-base.git
cd cms-base
```
2.安装依赖

```
npm install
or
yarn install
```

3.启动服务器

```
npm run start
or
npm run start:mocker
```

4.启动完成后打开浏览器访问 http://localhost:4000。接下来就可以进行业务开发了。


## 博客地址

> [引言](https://www.jianshu.com/p/4d04297ec9f1)
> 
> [第一章：项目创建、antd、less](https://www.jianshu.com/p/931ef818b753)
> 
>[第二章：路由拦截、路由嵌套]() 
> 
>[第二章：路由拦截、路由嵌套]() 
> 
>[第三章：状态管理 Redux]()
>
>[第四章：网络请求、代理、mockjs]()
>
>[第五章：webpack配置]()
>
>[第六章：Eslint]()