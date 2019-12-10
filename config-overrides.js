const {
  override,
  overrideDevServer,
  addLessLoader,
  addPostcssPlugins,
  fixBabelImports
} = require('customize-cra')

const CompressionWebpackPlugin = require('compression-webpack-plugin');

/**
 * 添加配置、跨域设置、增加less支持、px转rem、ant-design按需加载、打包压缩js和css
 * 参考: https://juejin.im/post/5dedd6c8f265da33d15884bf
 * */ 

// 打包配置
const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false
    // 配置打包后的文件位置
    config.output.path = __dirname + '../dist/demo/'
    config.output.publicPath = './demo'
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024
      })
    )
  }
  return config
}

// 跨域配置
const devServerConfig = () => config => {
  return {
    ...config,
    // 服务开启gzip
    compress: true,
    proxy: {
      '/api': {
        target: 'xxx',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        }
      }
    }
  }
}

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }),
    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': '#1DA57A' },
      // localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    }),
    addPostcssPlugins([
      require('postcss-pxtorem')
      ({ 
        rootValue: 16, // 根标签的 font-size 大小
        unitPrecision: 5, // 转换成rem后的小数位数
        propList: ['*'], // 需要转换的属性列表
        minPixelValue: 2, // 设置小于多少尺寸将不会进行转换
        selectorBlackList: [] // 选择器进行过滤的数组
      })
    ]),
    addCustomize()
  ),
  devServer: overrideDevServer(
    devServerConfig()
  )
}