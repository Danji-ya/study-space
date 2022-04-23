const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './index.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 9000,
    open : true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}