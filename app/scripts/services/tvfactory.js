'use strict';

/**
 * @ngdoc service
 * @name testAngularApp.TvFactory
 * @description
 * # TvFactory
 * Factory in the testAngularApp.
 */
angular.module('testAngularApp')
  .factory('TvFactory', function ($http, ENV) {
    
    var TvFactory = {};

    TvFactory.getShows = function(){
      $http.get(
        ENV.apiEndpoint + '/tvshows'
      ).success(function(data) {
        TvFactory.data = data;
      }).error(function(data){
        console.log(data);
      });
    };

    TvFactory.addShows = function(show){
      $http.post(
        ENV.apiEndpoint + '/tvshow',
        show
      ).success(function(data) {
        console.log(data);
      }).error(function(data){
        console.log(data);
      });
    };

    TvFactory.deleteShow = function(id, callback){
      $http.delete(
        ENV.apiEndpoint + '/tvshow/' + id
      ).success(function(data) {
        callback();
      }).error(function(data){
        console.log(data);
      });
    };

    // Return factory
    return TvFactory;

  });
