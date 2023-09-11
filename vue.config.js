const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'), // Use Dart Sass implementation
        sassOptions: {
          // Use 'additionalData' instead of 'prependData'
          additionalData: `
            @import "@/assets/styles/variables.scss"; // Import your custom variables here
          `,
        },
        sourceMap: true, // Enable source maps if needed
      },
    },
  },
})