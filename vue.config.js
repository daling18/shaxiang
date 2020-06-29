const publicPath = '/'

module.exports = {
  // runtimeCompiler: true,
  publicPath,
  productionSourceMap: false,
  pluginOptions: {
    apollo: {
      enableEngine: false,
      lintGQL: false,
      enableMocks: true,
    },
  },
  devServer: {
    disableHostCheck: true,
    before (app) {
      app.get(publicPath + 'runtime-args.json', (req, res) => {
        res.send(require('./runtime-args.dev.json'))
      })
    },
    // https: true,
  },
}
