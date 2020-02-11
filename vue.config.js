module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/scss/config.scss";`
            }
        }
    },
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        "vue$": 'vue/dist/vue.esm.js'
      }
    }
  }
}
