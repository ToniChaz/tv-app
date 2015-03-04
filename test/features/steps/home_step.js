'use strict';

//http://chaijs.com/
var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var assert = chai.assert;

module.exports = function() {

  this.Given(/^I go on "([^"]*)"$/, function(arg1, callback) {
    if (arg1 === 'index') {
      browser.get('http://localhost:9001');
    } else {
      browser.get('http://localhost:9001/#/' + arg1);
    }
    callback()
  });

  this.Then(/^the title should equal "([^"]*)"$/, function(arg1, callback) {
    expect(browser.getTitle()).to.eventually.equal(arg1).and.notify(callback);
  });

  this.Then(/^the menu should contain "([^"]*)"$/, function(arg1, callback) {
    element.all(by.css('.nav li')).filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text === arg1;
      });
    }).then(function(filteredElements) {
      expect(filteredElements).to.have.length(1);
      callback();
    });
  });

  this.Then(/^click the button "([^"]*)"$/, function(arg1, callback) {
    element(by.id(arg1)).click().then(function() {
      element.all(by.repeater('item in tv.data')).then(function(elem) {
        expect(elem).to.have.length(5);
        callback();
      });
    });
  });

  this.Then(/^all shows have title "([^"]*)"$/, function(arg1, callback) {
    var showsTitle = element.all(by.tagName(arg1)).map(function(elem, index) {
      return {
        index: index,
        text: elem.getText()
      };
    }).then(function(showTitle) {
      assert.strictEqual(showTitle[0].text, 'LOST');
      assert.strictEqual(showTitle[1].text, 'The feature');
      assert.strictEqual(showTitle[2].text, 'Breaking Bad');
      assert.strictEqual(showTitle[3].text, 'Intelligence');
      assert.strictEqual(showTitle[4].text, 'Homeland');
      callback();
    });
  });
}