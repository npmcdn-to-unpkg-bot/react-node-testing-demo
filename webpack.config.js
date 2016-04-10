const webpack = require('webpack');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'web');

module.exports = {
  entry: path.join(srcDir, 'index.jsx'),
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: srcDir
    }]
  }
};
