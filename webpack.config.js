require('dotenv').config({ silent: true });

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const AssetsPlugin = require('assets-webpack-plugin');

const parts = require('./webpack/parts');

const DEBUG = process.env.NODE_ENV !== 'production';

const genConfig = webpackMerge(
  {
    devtool: DEBUG ? 'eval' : false,
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: DEBUG,
      }),
    ],
  },
  parts.setupJs(),
  parts.setupFont(),
  parts.setupImages(),
  parts.setupJson(),
  parts.setupI18n(),
  !DEBUG && parts.setupProduction()
);

const config = webpackMerge(
  {
    entry: {
      app: ['babel-polyfill', './app/client'],
    },
    output: {
      path: path.join(__dirname, 'static'),
      publicPath: '/static/',
      filename: '[name].js?[hash]',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
        __CLIENT__: true,
      }),
      new AssetsPlugin({
        path: path.join(__dirname, 'static'),
      }),
    ],
  },
  DEBUG ? parts.setupCss() : parts.setupCssExtract(),
  DEBUG ? parts.setupFontGen() : parts.setupFontGenExtract(),
  genConfig
);

const serverConfig = webpackMerge(
  {
    entry: {
      server: './app/server/server.js',
    },
    target: 'node',
    node: {
      __dirname: true,
      __filename: true,
    },
    output: {
      path: path.join(__dirname, 'static'),
      filename: '[name].js',
      publicPath: '/static/',
      libraryTarget: 'commonjs2',
    },

    plugins: [
      new webpack.DefinePlugin({
        __CLIENT__: false,
      }),
    ],
    externals: [
      /^[a-z\/\-0-9]+$/i,
    ],
  },
  parts.setupCssCritical(),
  parts.setupFontGenCritical(),
  genConfig
);

module.exports = [
  DEBUG ? parts.setupHotReload(config) : config,
  serverConfig,
];
