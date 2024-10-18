const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:44390',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' },
      }
    }
  }
});
