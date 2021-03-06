// import webpack from 'webpack';
// import path from 'path';
const path = require('path');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },

  entry: [
    'babel-polyfill',
    './lib/renderers/dom.js' // necessary for hot reloading with IE
  ],

  output: {
    path: __dirname + '/public', // Note: Physical files are only output by the production build task `npm run build`.
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
      // { test: /(\.css)$/, loaders: ['style', 'css'] },
      // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      // { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
};

module.exports = config;