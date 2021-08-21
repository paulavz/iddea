const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./frontend/index.js",
  output: {
    path: path.join(__dirname, "backend/public"),
    filename: "js/[name]/[name].bundle.js",
    publicPath: '/'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name:'[name].[ext]',
          outputPath: './img/',
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtract({
      filename: './styles/[name].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
    runtimeChunk: {
      name: 'runtime',
    },
  },
};
