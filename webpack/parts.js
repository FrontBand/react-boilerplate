const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';

const extractStyles = new ExtractTextPlugin('[name].css?[hash]');

exports.setupJs = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
});


const cssLoader = {
  loader: 'css-loader',
  options: {
    localIdentName: DEBUG ? '[local]__[path][name]__[hash:base64:5]' : '[hash:base64]',
    modules: true,
    // it doesn't work correctly. It uses cssnano for minification, but do It unsafe.
    // For example, It remove -webkit prefix from flex rules. And it breaks support of Safari 8
    minimize: false,
  },
};

const scssLoaders = [
  cssLoader,
  'postcss-loader',
];

const cssLoaders = [
  'css-loader',
];

const fontLoaders = [
  cssLoader,
  {
    loader: 'webfonts-loader',
    options: {
      embed: true,
    },
  },
];

exports.setupCssCritical = () => ({
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'isomorphic-style-loader',
        ].concat(scssLoaders),
      },
      {
        test: /\.css/,
        use: [
          'isomorphic-style-loader',
        ].concat(cssLoaders),
      },
    ],
  },
});

exports.setupCss = () => ({
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          ...scssLoaders,
        ],
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          ...cssLoaders,
        ],
      },
    ],
  },
});

exports.setupCssExtract = () => ({
  module: {
    rules: [
      {
        test: /\.scss/,
        use: extractStyles.extract({
          use: scssLoaders,
        }),
      },
      {
        test: /\.css/,
        use: extractStyles.extract({
          use: cssLoaders,
        }),
      },
    ],
  },
  plugins: [
    extractStyles,
  ],
});

exports.setupCssIgnore = () => ({
  module: {
    rules: [
      {
        test: /\.(scss|css)/,
        use: [
          'ignore-loader',
        ],
      },
    ],
  },
});

exports.setupFontGen = () => ({
  module: {
    rules: [
      {
        test: /\.font\.(js|json)$/,
        use: [
          'style-loader',
        ].concat(fontLoaders),
      },
    ],
  },
});

exports.setupFontGenCritical = () => ({
  module: {
    rules: [
      {
        test: /\.font\.(js|json)$/,
        use: [
          'isomorphic-style-loader',
        ].concat(fontLoaders),
      },
    ],
  },
});

exports.setupFontGenExtract = () => ({
  module: {
    rules: [
      {
        test: /\.font\.(js|json)$/,
        use: extractStyles.extract({
          use: fontLoaders,
        }),
      },
    ],
  },
  plugins: [
    extractStyles,
  ],
});

exports.setupFont = () => ({
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
        loader: 'file-loader',
      },
    ],
  },
});

exports.setupImages = () => ({
  module: {
    rules: [
      {
        test: /.*\.(gif|png|svg|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
});

exports.setupJson = () => ({
  module: {
    rules: [
      {
        test: /\.json/i,
        loader: 'json-loader',
      },
    ],
  },
});

exports.setupI18n = () => ({
  module: {
    rules: [
      {
        test: /\.po$/,
        use: [
          'i18next-po-loader',
        ],
      },
    ],
  },
});

exports.setupProduction = () => ({
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
  ],
});

exports.setupHotReload = (config, port = 3030) => {
  const resConfig = webpackMerge(
    {},
    config, {
      output: {
        publicPath: `http://localhost:${port}${config.output.publicPath}`,
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
      ],
    }
  );

  Object.keys(config.entry).forEach((key) => {
    resConfig.entry[key] = [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${port}`, // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
    ].concat(config.entry[key]);
  });

  return resConfig;
};
