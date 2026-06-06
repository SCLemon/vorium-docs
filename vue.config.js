const { defineConfig } = require('@vue/cli-service')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = defineConfig({
  lintOnSave: false,
  outputDir: 'docs',
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: [
          'javascript', 'typescript', 'html', 'css', 'json', 'markdown',
        ],
      })
    ]
  }
})
