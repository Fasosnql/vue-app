'use strict';
const path = require('path');
// Modules
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === 'build';
const isTest = ENV === 'test';
const distDir = '/dist';

const config = {
  entry: isTest ? void 0 : './src/app.ts',
  output: isTest ? {} : {
    path: __dirname + distDir,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: '8088',
    historyApiFallback: true,
    inline: true,
    progress: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  }
};

if (!isProd) {
  config.plugins.push(
    new TSLintPlugin({
      files: ['./src/**/*.ts']
    })
  );
}

module.exports = config;
