const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
  favicon: './src/favicon.ico'
});

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: {
    app: ['./src/app.jsx'],
    vendors: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'react-router-dom',
      'axios'
    ]
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'assets/[name].[hash].js'
    // publicPath: "/boilerplate/"
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@utils': path.resolve(__dirname, 'src/utils/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.s[a|c]ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.(eot|ttf|woff|svg)?$/,
        loader: 'file-loader',
        query: {
          name: 'assets/[hash].[ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        loader: 'url-loader',
        exclude: /app.js/,
        query: {
          limit: 1024,
          name: 'assets/[hash].[ext]'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'assets/[name].[hash].css' }),
    HTMLWebpackPluginConfig
  ]
};
