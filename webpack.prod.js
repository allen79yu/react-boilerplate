const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
  favicon: './src/favicon.ico'
});

module.exports = merge(common, {
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('assets/[name].[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'assets/[name].[hash].js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
});
