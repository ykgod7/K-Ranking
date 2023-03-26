const { defineConfig } = require('@vue/cli-service')
// const path = require("path")

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    proxy: {
        "/api": {
            target: "http://localhost:5000"
        }
    }
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
