
// 在 `vue.config.js` 中加入 Monaco Webpack Plugin，並設定需要支援的語言：

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new MonacoWebpackPlugin({
                languages: [
                    'javascript',
                    'typescript',
                    'html',
                    'css',
                    'json',
                    'markdown'
                ]
            })
        ]
    }
}