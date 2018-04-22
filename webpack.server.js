const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const DashboardPlugin = require('webpack-dashboard/plugin');

const config = require('./webpack.config');

const port = 3030;

const compiler = webpack(config[0]);
compiler.apply(new DashboardPlugin());

new WebpackDevServer(compiler, {
  publicPath: config[0].output.publicPath,
  hot: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  // It suppress error shown in console, so it has to be set to false.
  quiet: false,
  // It suppress everything except error, so it has to be set to false as well
  // to see success build.
  noInfo: false,
  stats: {
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
}).listen(port, 'localhost', (err) => {
  /* eslint-disable no-console */
  if (err) {
    console.log(err);
  }

  console.log(`Webpack dev server is listening at localhost: ${port}`);
});
