const path = require("path");

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.js?$/, // 文件过滤规则
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'] // es2015 处理 ES6 语法，react 处理 jsx 语法
        }
      },
      {
        test: /\.less$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'less-loader?sourceMap'
        ]
      }
    ]
  },
  devServer: {inline: true}
};