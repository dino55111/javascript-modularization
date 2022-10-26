const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const config = {
  entry: {
    'main': './src/index.js',
    'error': './src/error.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: ['file-loader']
      }
    ]
  },
  // webpack-dev-serve
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 10000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'monsters',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'verdors'
        }
      }
    }
  }
}

module.exports = (env, argv) => {

  if (env.NODE === 'staging') {
    config.devtool = 'inline-source-map'
  }

  if (env.NODE_ENV === 'local') {

  }
  // console.log('env: ', env)
  // console.log('argv: ', argv)
  return config
}