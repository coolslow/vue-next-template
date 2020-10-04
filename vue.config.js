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
        '@apis': resolve('src/apis'),
        '@assets': resolve('src/assets'),
        '@requests': resolve('src/common/requests'),
        '@utils': resolve('src/common/utils'),
        '@components': resolve('src/components'),
        '@views': resolve('src/views')
      }
    }
  }
}
