const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: 'babel-loader',
        options: {
          plugins: ['babel-plugin-styled-components'],
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        },
        exclude: /node_modules/,
      },
    ],
  },
});