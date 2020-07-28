const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: ["@babel/polyfill", path.resolve(__dirname, "src/index.js")],
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[id].[name].[chunkhash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[hash].[ext]",
            outputPath: "assets/",
          },
        },
      },
    ],
  },
};
