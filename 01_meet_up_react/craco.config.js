// craco: 保证在不eject出项目配置的情形下，
// 便捷清晰的添加自定义配置项
const CracoLessPlugin = require('craco-less');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {'@primary-color': '#1DA57A'},
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  // 配置别名
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components")
    }
  }
}