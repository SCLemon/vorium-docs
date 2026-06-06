/*

若遇到以下錯誤：

```text
Static class blocks are not enabled
```

請安裝 Babel Plugin：

```bash
npm install -D @babel/plugin-transform-class-static-block
```

並於 `babel.config.js` 中加入：

*/

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        '@babel/plugin-transform-class-static-block'
    ]
}


/*

## Notes

- 建議使用 `monaco-editor@0.49.0`
- 建議使用 `monaco-editor-webpack-plugin@7.1.1`
- 使用 Vue CLI 5 進行建置
- Monaco Theme 為全域設定，不支援同頁面多個不同 Theme Editor

*/