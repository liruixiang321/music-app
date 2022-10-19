const registerRouter = require('./backend/router')

// 获取主题文件名
// const themeFiles = fs.readdirSync("./src/style/theme");
// let ThemesArr = [];
// themeFiles.forEach(function (item, index) {
//   let stat = fs.lstatSync("./src/assets/scss/theme.scss" + item);
//   if (stat.isDirectory() === true) {
//     ThemesArr.push(item);
//   }
// });



module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before(app) {
      registerRouter(app)
    }
  },
  configureWebpack: (config) => {

    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      config.plugins.push(new BundleAnalyzerPlugin())
    }
    const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
      const Components  =  require('unplugin-vue-components/webpack');
      const AutoImport  =  require('unplugin-auto-import/webpack');
      config.plugins.push(
        AutoImport({
        resolvers: [ElementPlusResolver()],
      }));
      config.plugins.push(
      Components({
                resolvers: [ElementPlusResolver()],
              })
      );
      // config.plugins.push(
      //   new webpack.DefinePlugin({
      //     THEMEARR: JSON.stringify(ThemesArr),
      //   })
      // )
      config.module.rules.push(
        {
        
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
      
      })
  },
  productionSourceMap: false,

  // publicPath: process.env.NODE_ENV === 'production' ? '/music':'/'

}
