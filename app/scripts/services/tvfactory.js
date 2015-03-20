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
      $http.get(
        ENV.apiEndpoint + '/tvshows'
      ).success(function(data, status, headers, config) {
        TvFactory.data = data;
      }).error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
    };

    TvFactory.addShows = function(show, callback) {
      $http.post(
        ENV.apiEndpoint + '/tvshow',
        show
      ).success(function(data, status, headers, config) {
        callback(data);
      }).error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
    };

    TvFactory.deleteShow = function(id, callback) {
      $http.delete(
        ENV.apiEndpoint + '/tvshow/' + id
      ).success(function(data, status, headers, config) {
        callback(data);
      }).error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
    };

    TvFactory.updateShow = function(id, show, callback) {
      $http.put(
        ENV.apiEndpoint + '/tvshow/' + id,
        show
      ).success(function(data, status, headers, config) {
        callback(data);
      }).error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
    };

    // Return factory
    return TvFactory;

  });