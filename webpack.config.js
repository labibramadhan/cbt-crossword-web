const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'app'),
    publicPath: '/app/',
    filename: 'bundle.js',
  },
  resolve: {
    root: path.join(__dirname, 'app'),
  },
  devServer: {
    hot: false,
    contentBase: 'app',
    stats: {
      colors: true,
    },
  },
  devtool: 'inline-source-map',
  debug: true,
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules|bower_components|libraries/,
    }, ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  node: {
    fs: 'empty',
  },
};