const { defineConfig } = require('@vue/cli-service')
// const path = require("path")

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    proxy: 'http://k-ranking.co.kr/',
    port: 8081,
    changeOrigin: true,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/reset.scss";
        @import "@/assets/scss/_mixins.scss";
        @import "@/assets/scss/_variables.scss";
        @import "@/assets/scss/_extends.scss";
        `
      }
    }
  }
  // outputDir: path.resolve(__dirname, "../src/main/resources/static")
})
