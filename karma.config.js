const webpack = require('webpack');
const karmaWebpack = require('karma-webpack');
const karmaMocha = require('karma-mocha');
const karmaChai = require('karma-chai');
const karmaSinon = require('karma-sinon');
const karmaCoverage = require('karma-coverage');
const karmaPhantomjsLauncher = require('karma-phantomjs-launcher');
const karmaSourcemapLoader = require('karma-sourcemap-loader');
const karmaSpecReporter = require('karma-spec-reporter');
const karmaCoveralls = require('karma-coveralls');
const webpackMerge = require('webpack-merge');

const parts = require('./webpack/parts');

const IS_COVERALLS = process.env.COVERAGE === 'coveralls';

const webpackTestConfig = webpackMerge(
  parts.setupJs(),
  parts.setupCssCritical(),
  parts.setupFont(),
  parts.setupFontGenCritical(),
  parts.setupImages(),
  parts.setupJson(),
  parts.setupI18n(),
  {
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
    plugins: [
      new webpack.DefinePlugin({
        __CLIENT__: false,
      }),
    ],
  }
);

const plugins = [
  karmaWebpack,
  karmaMocha,
  karmaChai,
  karmaSinon,
  karmaCoverage,
  karmaPhantomjsLauncher,
  karmaSourcemapLoader,
  karmaSpecReporter,
];

const reporters = [
  'spec',
  'coverage',
];

if (IS_COVERALLS) {
  plugins.push(karmaCoveralls);
  reporters.push('coveralls');
}

module.exports = (config) => {
  config.set({
    basePath: '.',

    reporters,
    plugins,

    files: [
      'app/common/components/Icon/index.spec.js',
    ],

    frameworks: ['mocha'],

    preprocessors: {
      'app/**/*.spec.js': ['webpack'],
    },

    browserNoActivityTimeout: 30000,
    browserDisconnectTimeout: 10000,
    webpack: webpackTestConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },

    browsers: ['PhantomJS'],
    client: {
      mocha: {
        timeout: 6000, // 6 seconds - upped from 2 seconds
      },
    },
    coverageReporter: {
      type: 'lcov',
      dir: './coverage',
    },

    concurrency: Infinity,
  });
};
