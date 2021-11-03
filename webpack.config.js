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
      test: /\.js$/, //js 확장자로 끝나는 모든 파일을 의미
      use: [path.resolve('./myloader.js')] // 생성한 로더 적용
    }],
  }
}