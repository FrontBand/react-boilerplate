require('dotenv').config({ silent: true });
require('babel-core/register');

const config = {
  src_folders: [
    'tests/tests',
  ],
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: './tests/pages',
  globals_path: './tests/helpers/globals.js',
  disable_colors: false,
  test_workers: false,
  selenium: {
    start_process: false,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
    server_path: '',
    cli_args: {
      'webdriver.chrome.driver': '',
      'webdriver.ie.driver': '',
      'webdriver.firefox.profile': '',
    },
  },
  test_settings: {
    local: {
      skip_testcases_on_fail: false,
      silent: true,
      selenium: {
        start_process: true,
        server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.53.1.jar',
        cli_args: {
          'webdriver.chrome.driver': './node_modules/chromedriver/lib/chromedriver/chromedriver',
        },
      },
      screenshots: {
        enabled: false,
        path: '',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
    travis: {
      skip_testcases_on_fail: false,
      silent: true,
      screenshots: {
        enabled: false,
        path: '',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
};

if (process.env.BROWSERSTACK) {
  config.selenium = {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80,
  };
  config.test_settings.default.desiredCapabilities = {
    build: 'nightwatch-browserstack',
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    'browserstack.debug': false,
    browser: 'chrome',
  };
}

let item;
Object.keys(config.test_settings).forEach((i) => {
  item = config.test_settings[i];
  item.launch_url = 'http://localhost:8080';
  item.selenium_host = config.selenium.host;
  item.selenium_port = config.selenium.port;
});

module.exports = config;
