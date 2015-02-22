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

	$scope.getShows = function(){
		return $scope.tv.getShows();
	}

  });
