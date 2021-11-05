const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");


module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
    assetModuleFilename: "[name][ext]?[hash]"
  },
  module: {
    rules: [
      {
        test: /\.css$/, // css 확장자로 끝나는 모든 파일을 의미
        use: ["style-loader","css-loader"], // style-loader 및 css-loader 적용
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        // type: "asset/resource" // file-loader와 같은 효과
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 기준으로 20kb 로 변경
          },
        }  
      }
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner:`
        Build Data: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
        Author: ${childProcess.execSync('git config user.name')}
      `
    }),
    // new webpack.DefinePlugin({
    //   TWO: '1+1',
    //   VERSION: JSON.stringify('v.1.2.3'),
    //   'api.domain': JSON.stringify('http://test.domain.com'),
    // })
  ]
}