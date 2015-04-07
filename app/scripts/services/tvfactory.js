'use strict';

/**
 * @ngdoc service
 * @name testAngularApp.TvFactory
 * @description
 * # TvFactory
 * Factory in the testAngularApp.
 */
angular.module('testAngularApp')
  .factory('TvFactory', function($http, $log, ENV) {

    var TvFactory = {};

    TvFactory.getShows = function() {
      $http.get(
        ENV.apiEndpoint + '/tvshows'
      ).success(function(data) {        
        TvFactory.data = data;
      }).error(function(data, status, headers, config) {
        var result = [];
        result.push(data);
        result.push(status);
        result.push(headers);
        result.push(config);
        $log.log(result);
      });
    };

    TvFactory.addShows = function(show, callback) {
      $http.post(
        ENV.apiEndpoint + '/tvshow',
        show
      ).success(function(data) {
        callback(data);
      }).error(function(data, status, headers, config) {
        var result = [];
        result.push(data);
        result.push(status);
        result.push(headers);
        result.push(config);
        $log.log(result);
      });
    };

    TvFactory.deleteShow = function(id, callback) {
      $http.delete(
        ENV.apiEndpoint + '/tvshow/' + id
      ).success(function(data) {
        callback(data);
      }).error(function(data, status, headers, config) {
        var result = [];
        result.push(data);
        result.push(status);
        result.push(headers);
        result.push(config);
        $log.log(result);
      });
    };

    TvFactory.updateShow = function(id, show, callback) {
      $http.put(
        ENV.apiEndpoint + '/tvshow/' + id,
        show
      ).success(function(data) {
        callback(data);
      }).error(function(data, status, headers, config) {
        var result = [];
        result.push(data);
        result.push(status);
        result.push(headers);
        result.push(config);
        $log.log(result);
      });
    };

    // Return factory
    return TvFactory;

  });