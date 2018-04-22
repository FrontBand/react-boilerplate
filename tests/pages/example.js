
module.exports = {
  url() {
    return `${this.api.launchUrl}/`;
  },
  elements: {
    main: {
      selector: 'body',
    },
  },
  commands: [{
    ssr() {
      return this.waitForElementPresent('@main');
    },
  }],
};
