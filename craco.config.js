const path = require('path')
const CracoLessPlugin = require('craco-less')
const apiMocker = require('mocker-api')//使用mocker-api库
const CompressionWebpackPlugin = require('compression-webpack-plugin')//
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,//引入less
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true //js修改主题样式
          }
        }
      }
    }
  ],
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }], //装饰器
      [
        'import',//按需引入antd 样式
        {
          'libraryName': 'antd',
          'libraryDirectory': 'es',
          'style': true
        }
      ]
    ]
  },
  webpack: {
    // 别名
    alias: {
      '@': pathResolve('src')
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 300000,
        maxSize: 1000000,
        name: true,
        maxAsyncRequests: 5, // 最大异步请求数
        maxInitialRequests: 4, // 页面初始化最大异步请求数
        automaticNameDelimiter: '~', // 解决命名冲突
        cacheGroups: {
          common: {
            name: 'chunk-common',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|react-router|redux-thunk|)[\\/]/,
            priority: -10
          },
          antd: {
            name: 'antd',
            test: (module) => {
              return /ant/.test(module.context)
            },
            chunks: 'async',
            priority: 11,
            enforce: true
          },
        }
      }
    },
    webpack: {
      plugins: [
        // 打压缩包
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' +
            ['js', 'css'].join('|') +
            ')$'
          ),
          threshold: 1024,
          minRatio: 0.8
        }),
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          },
          sourceMap: false,
          parallel: true
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new SimpleProgressWebpackPlugin()
      ]
    }
  },
  devServer: {
    proxy: {
      '/cmsapi': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/cmsapi': ''
        }
      }
    },
    //如果使用mocker-api库
    before (app) {
      if (process.env.MOCKER_ENV) {
        apiMocker(app, path.resolve('./mocker/index.js'), {})
      }
    }
  },
  server: {
    before (app) {
      apiMocker(app, path.resolve('./mocker/index.js'), {})
    }
  }
}