const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const path = require('path')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: {
    app: APP_DIR + '/index.jsx'
  },
  resolve: {
    extensions: [".jsx", ".json", ".js"]
  },
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.s[c|a]ss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: APP_DIR + '/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {}
}

