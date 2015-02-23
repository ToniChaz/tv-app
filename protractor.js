// Generated on 2015-01-28
'use strict';

/*******************************
* To test with protractor:
* sudo webdriver-manager update
* webdriver-manager start
*******************************/
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/*.js'],
  baseUrl: 'http://localhost:9000' //default test port with Yeoman
};
