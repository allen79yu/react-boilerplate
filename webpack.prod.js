const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
  favicon: './src/favicon.ico'
});

module.exports = merge(common, {
  plugins: [new webpack.NoEmitOnErrorsPlugin()]
});
