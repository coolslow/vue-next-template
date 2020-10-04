'use strict'

const PORT = process.env.port || 3000

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
  }
}
