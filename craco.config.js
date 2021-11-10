const path = require('path')
const CracoLessPlugin = require('craco-less')
const apiMocker = require('mocker-api')//使用mocker-api库
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const WebpackBar = require('webpackbar');

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
        minSize: 40000,
        maxSize: 1000000,
        name: true,
        maxAsyncRequests: 5, // 最大异步请求数
        maxInitialRequests: 4, // 页面初始化最大异步请求数
        automaticNameDelimiter: '~', // 解决命名冲突
        cacheGroups: {
          vender: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'async',
            priority: 10,
            enforce: true
          },
          react: {
            name: 'react',
            test: (module) => /react|redux/.test(module.context),
            chunks: 'initial',
            priority: 11,
            enforce: true
          },
          antd: {
            name: 'antd',
            test: (module) => {
              return /ant/.test(module.context)
            },
            chunks: 'async',
            priority: 11,
            enforce: true
          }
        }
      }
    },
    configureWebpack: smp.wrap({
      plugins: [
        // new BundleAnalyzerPlugin(),
        new WebpackBar(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
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
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true,
            },
          },
          sourceMap: false,
          parallel: true,
        })
      ]
    }),
    // plugins: [
    //   // new BundleAnalyzerPlugin(),
    //   new WebpackBar(),
    //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    //   new CompressionWebpackPlugin({
    //     algorithm: 'gzip',
    //     test: new RegExp(
    //       '\\.(' +
    //       ['js', 'css'].join('|') +
    //       ')$'
    //     ),
    //     threshold: 1024,
    //     minRatio: 0.8
    //   }),
    //   new UglifyJsPlugin({
    //     uglifyOptions: {
    //       warnings: false,
    //       compress: {
    //         drop_debugger: true,
    //         drop_console: true,
    //       },
    //     },
    //     sourceMap: false,
    //     parallel: true,
    //   })
    // ]
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
    before (app) {
      //如果使用mocker-api库
      if (process.env.MOCKER_ENV) {
        apiMocker(app, path.resolve('./mocker/index.js'), {})
      }
    }
  }
}