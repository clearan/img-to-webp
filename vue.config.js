const {resolve} = require('path');
const {WebpPlugin} = require(resolve(__dirname, 'src/plugin/WebpPlugin.js'))
module.exports = {
    publicPath: './',
    outputDir: resolve(__dirname, 'build'),
    chainWebpack: (config) => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            // .tap((options) => Object.assign(options, {limit: 5*1024}))
    },
    assetsDir: 'static/',
    configureWebpack: (config) =>  {
        config.plugins.push(new WebpPlugin())
    },
}
