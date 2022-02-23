const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'monitor.min.js',
    libraryTarget: 'umd',
    library: 'NodeMonitor',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    host: 'localhost',
    https: false,
    disableHostCheck: true,
    port: 9100,
    open: false,
    liveReload: true,
    public: 'localhost:9100',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    contentBase: [
      path.join(__dirname, 'examples'),
      path.join(__dirname, 'lib'),
    ],
  },
  externals: {
    'prom-client': 'prom-client'
  }
}
