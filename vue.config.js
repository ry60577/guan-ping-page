const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
const publicPath = 'guan-ping-page'

module.exports = {
  publicPath: isProduction ? `/${publicPath}` : '/',
  //   transpileDependencies: false,
  outputDir: `dist/${publicPath}`,
  assetsDir: 'static',
  chainWebpack: config => {
    config.plugin('copy').tap(([pathConfigs]) => {
      pathConfigs.unshift({
        from: 'config',
        to: 'config'
      })
      return [pathConfigs]
    })
    config.plugin('html').tap(args => { args[0].title = 'Guan Ping Chen Web'; return args })
    if (isProduction) {
      //  正式環境下，刪除console和debugger
      config.optimization
        .minimize(true)
        .minimizer('terser')
        .tap(args => {
          const { terserOptions } = args[0]
          terserOptions.compress.drop_console = true
          terserOptions.compress.drop_debugger = true
          return args
        })
    }
  },
  configureWebpack: config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/assets': path.resolve(__dirname, './src/assets'),
        '@/store': path.resolve(__dirname, './src/store'),
        '@/composable': path.resolve(__dirname, './src/composable')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/styles/_variable.scss";@import "~@/assets/styles/reset.css";'
      }
    }
  }

}
