const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [{
      test: /\.css$/, // css 확장자로 끝나는 모든 파일을 의미
      use: ["style-loader","css-loader"], // style-loader 및 css-loader 로더 적용
    }],
  }
}