
module.exports = {
  files: [
    'icons/*.svg', // glob style
  ],
  fontName: 'fontIcons',
  classPrefix: 'icon-',
  baseSelector: '.icon',
  fixedWidth: true,
  types: ['eot', 'woff', 'ttf', 'svg'], // this is the default
  cssTemplate: 'templates/css.hbs',
};
