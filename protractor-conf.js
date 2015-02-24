'use strict';

exports.config = {
  baseUrl: 'http://localhost:9000',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'cucumber',
  specs: [
    'test/features/*.feature'
  ],
  capabilities: {
    browserName: 'phantomjs',
    'phantomjs.binary.path': './node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin/phantomjs',
    'phantomjs.cli.args': '--debug=true --webdriver --webdriver-logfile=webdriver.log --webdriver-loglevel=DEBUG',
    version: '',
    platform: 'ANY'
  },
  cucumberOpts: {
    require: 'test/features/steps/*_step.js',
    format: 'pretty'
  }
}