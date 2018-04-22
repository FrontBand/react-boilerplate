const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge')
const parts = require('../webpack/parts')

module.exports = webpackMerge(
  {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
        __CLIENT__: true,
      }),
    ],
  },
  parts.setupJs(),
  parts.setupFont(),
  parts.setupImages(),
  parts.setupJson(),
  parts.setupI18n(),
  parts.setupCss(),
  parts.setupFontGen(),
)
