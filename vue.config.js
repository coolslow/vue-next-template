'use strict'
const PORT = process.env.port || 3000
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const resolve = path.resolve

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  devServer: {
    host: 'localhost',
    port: PORT,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['ts', 'tsx', '.vue', '.js', '.json'],
      alias: {
        '@': resolve('src'),
        '@apis': resolve('src/apis'), // 接口相关
        '@assets': resolve('src/assets'), // 静态资源相关
        '@auth': resolve('src/common/auth'), // 鉴权相关
        '@utils': resolve('src/common/utils'), // 工具包
        '@requests': resolve('src/common/requests'), // 请求相关
        '@components': resolve('src/components'), // 组件部分
        '@views': resolve('src/views') // 业务相关页面
      }
    }
  }
}
