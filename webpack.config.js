const path = require("path");

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
  }
}