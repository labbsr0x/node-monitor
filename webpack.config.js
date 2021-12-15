const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'monitor.min.js',
    libraryTarget: 'umd',
    library: 'NodeMonitor',
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
    contentBase: [
      path.join(__dirname, 'examples'),
      path.join(__dirname, 'lib'),
    ],
  },
}
