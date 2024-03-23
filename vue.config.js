const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        "fs": false, // Désactiver le polyfill fs (si inutile)
        "path": require.resolve("path-browserify")
      }
    }
  }
});











// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       fallback: {
//         "fs": false, // Désactiver le polyfill fs (si inutile)
//         "path": require.resolve("path-browserify")
//       }
//     }
//   }
// };

