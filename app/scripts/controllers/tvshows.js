'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:TvshowsCtrl
 * @description
 * # TvshowsCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('TvshowsCtrl', function ($scope, TvFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
    $scope.tv = TvFactory;
    $scope.getShowsBox = false;
  	$scope.addShowsBox = false;

  	$scope.getShows = function(){
      $scope.addShowsBox = false;
      $scope.getShowsBox = true;
      return $scope.tv.getShows();
    }

    $scope.deleteShow = function(id, index){      
      $scope.tv.deleteShow(id, function(){
        TvFactory.data.splice(index, 1);
      });
    }

    $scope.addShows = function(){
      $scope.getShowsBox = false;
      $scope.addShowsBox = true;
  	}

    $scope.submit = function(show){
      $scope.tv.addShows(show);
      $scope.show = null
    }

  });
