const { defineConfig } = require('@vue/cli-service')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = defineConfig({
  lintOnSave: false,
  // transpileDependencies: true,  
  outputDir: 'docs',
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: [
          'javascript',
          'typescript',
          'html',
          'css',
          'json',
          'markdown',
          'python',
          'c',
          'cpp',
          'rust',
          'go',
          'java',
          'php',
        ],
      })
    ]
  }
})
