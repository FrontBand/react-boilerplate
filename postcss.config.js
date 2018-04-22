const autoprefixer = require('autoprefixer');
const precss = require('precss');
const postCssNested = require('postcss-nested');
const postCssApply = require('postcss-apply');
const postCssVariables = require('postcss-css-variables');
const postCssImport = require('postcss-import');
const postCssMath = require('postcss-math');
const postCssExtend = require('postcss-extend');
const cssNano = require('cssnano');

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  plugins: [
    postCssImport({
      path: [
        'assets/styles',
      ],
    }),
    precss,
    postCssNested,
    postCssVariables,
    postCssMath,
    postCssApply,
    postCssExtend,
    autoprefixer,
  ].concat(DEBUG ? [] : [
    cssNano({
      autoprefixer: false,
      reduceInitial: false,
      discardComments: {
        removeAll: true,
      },
      discardEmpty: true,
      discardUnused: false,
      mergeIdents: false,
      normalizeUrl: false,
      reduceIdents: false,
      zindex: false,
    }),
  ]),
};
