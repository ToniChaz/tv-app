'use strict';

//http://chaijs.com/
var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

//var request = require('request');

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
    //     url: 'http://localhost:8882/tvshows',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // };

    // function callback(error, response, body) {
    //     console.log('error---->', error);
    //     console.log('response---->', response);
    //     console.log('body---->', body);
    // }

    // request(options, callback);
    
    var Stubby = require('stubby').Stubby;
    var mockService = new Stubby();

    mockService.start({
      stubs: 8882,
      admin: 8889,
      location: 'localhost',
      data: [{
        request: {
          url: "/tvshows$",
          method: "GET"
        },
        response: {
          status: 200,
          body: [{
            "_id": "54e5dc0034c9d2dc22000001",
            "title": "LOST",
            "year": 2004,
            "country": "USA",
            "poster": "http://lorempixel.com/400/200/",
            "seasons": 6,
            "genre": "Sci-Fi",
            "summary": "The survivors of a plane crash are forced to live with each other on a remote island, a dangerous new world that poses unique threats of its own.",
            "__v": 0
          },
          {
            "_id": "54e5f54098c441225d000002",
            "title": "The feature",
            "year": 2012,
            "country": "USA",
            "poster": "http://lorempixel.com/400/200/",
            "seasons": 8,
            "genre": "Thriller",
            "summary": "The survivors of a plane crash are forced to live with each other on a remote island, a dangerous new world that poses unique threats of its own.",
            "__v": 0
          },
          {
            "_id": "54e5f54898c441225d000003",
            "title": "Breaking Bad",
            "year": 2008,
            "country": "USA",
            "poster": "http://lorempixel.com/400/200/",
            "seasons": 5,
            "genre": "Sci-Fi",
            "summary": "The survivors of a plane crash are forced to live with each other on a remote island, a dangerous new world that poses unique threats of its own.",
            "__v": 0
          },
          {
            "_id": "54e5f55098c441225d000004",
            "title": "Girls",
            "year": 2010,
            "country": "France",
            "poster": "http://lorempixel.com/400/200/",
            "seasons": 2,
            "genre": "Sci-Fi",
            "summary": "The survivors of a plane crash are forced to live with each other on a remote island, a dangerous new world that poses unique threats of its own.",
            "__v": 0
          },
          {
            "_id": "54e5f55798c441225d000005",
            "title": "Homeland",
            "year": 2012,
            "country": "England",
            "poster": "http://lorempixel.com/400/200/",
            "seasons": 2,
            "genre": "Sci-Fi",
            "summary": "The survivors of a plane crash are forced to live with each other on a remote island, a dangerous new world that poses unique threats of its own.",
            "__v": 0
          }]
        }

      }]
    }, function (error) {
      console.log('Stubby start...')
      if (error) {
        console.log(error);
      } else {
        element(by.id(arg1)).click().then(function () {
          element.all().ptor_.getPageSource().then(function (response) {
            console.log(response);
            callback();
          });
          //expect(element.all(by.repeater('item in tv.data')).count()).toEqual(10)
          //var shows = element.all(by.repeater('item in tv.data'));
          //expect(shows.count()).to.have.length(5);

        });
      };
      mockService.stop(function(){
        console.log('Stubby stop!')
      });
    });
  });
}