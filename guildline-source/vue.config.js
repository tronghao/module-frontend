const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "",
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
  },
});
