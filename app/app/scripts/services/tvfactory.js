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

    // Return factory
    return TvFactory;

  });
