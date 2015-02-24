'use strict';

//http://chaijs.com/
var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// var request = require('request');

module.exports = function () {

  this.Given(/^I go on "([^"]*)"$/, function (arg1, callback) {
    if (arg1 === 'index') {
      browser.get('http://localhost:9000');
    } else {
      browser.get('http://localhost:9000/#/' + arg1);
    }
    callback()
  });

  this.Then(/^the title should equal "([^"]*)"$/, function (arg1, callback) {
    expect(browser.getTitle()).to.eventually.equal(arg1).and.notify(callback);
  });

  this.Then(/^the menu should contain "([^"]*)"$/, function (arg1, callback) {
    element.all(by.css('.nav li')).filter(function (elem, index) {
      return elem.getText().then(function (text) {
        return text === arg1;
      });
    }).then(function (filteredElements) {
      expect(filteredElements).to.have.length(1);
      callback();
    });
  });

  this.Then(/^click the button "([^"]*)"$/, function (arg1, callback) {
    // var options = {
    //     method: 'GET',
    //     url: 'http://localhost:8000/tvshows',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // };

    // function callback(error, response, body) {
    //     console.log('body---->', body);
    // }

    // request(options, callback);

    element(by.id(arg1)).click().then(function () {
      element.all().ptor_.getPageSource().then(function (response) {
        console.log(response);
        callback();
      });
      //expect(element.all(by.repeater('item in tv.data')).count()).toEqual(10)
      //var shows = element.all(by.repeater('item in tv.data'));
      //expect(shows.count()).to.have.length(5);

    });
  });
}