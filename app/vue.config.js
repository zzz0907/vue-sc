module.exports = {
    // 打包不生成map文件
    productionSourceMap:false,
    // 关闭eslint
    lintOnSave:false,
    //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211",
      },
    },
  },
}