var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/app/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css!sass'
        )
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/templates/index.html',
      inject: 'body'
    }),
    new Clean(['build'])
  ]
};