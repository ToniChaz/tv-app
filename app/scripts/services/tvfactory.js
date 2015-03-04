'use strict';

/**
 * @ngdoc service
 * @name testAngularApp.TvFactory
 * @description
 * # TvFactory
 * Factory in the testAngularApp.
 */
angular.module('testAngularApp')
  .factory('TvFactory', function($http, ENV) {

    var TvFactory = {};

    TvFactory.getShows = function() {
      $.ajax('GET', 'caca').success(function(data, status, headers, config) {
        TvFactory.data = data;
        TvFactory.status = status;
        TvFactory.headers = headers;
        TvFactory.config = config;
        document.getElementById('response').innerHTML = 'success';
      }).error(function(data, status, headers, config) {
        TvFactory.data = data;
        TvFactory.status = status;
        TvFactory.headers = headers;
        TvFactory.config = config;
        document.getElementById('response').innerHTML = 'fail';
      });
      /*$http.jsonp(
        ENV.apiEndpoint + '/tvshows'
      ).success(function(data, status, headers, config) {
        TvFactory.data = data;
        TvFactory.status = status;
        TvFactory.headers = headers;
        TvFactory.config = config;
      }).error(function(data, status, headers, config) {
        TvFactory.data = data;
        TvFactory.status = status;
        TvFactory.headers = headers;
        TvFactory.config = config;
        console.log(data, status, headers, config);
      });*/
    };

    TvFactory.addShows = function(show) {
      $http.post(
        ENV.apiEndpoint + '/tvshow',
        show
      ).success(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      }).error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
    };

    TvFactory.deleteShow = function(id, callback) {
      $http.delete(
        ENV.apiEndpoint + '/tvshow/' + id
      ).success(function(data, status, headers, config) {
        callback();
      }).error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
    };

    // Return factory
    return TvFactory;

  });