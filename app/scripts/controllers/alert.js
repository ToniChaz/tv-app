'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:AlertCtrl
 * @description
 * # AlertCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('AlertCtrl', function($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.alerts = [];

    $scope.addAlert = function(data) {
      $scope.alerts.push({
      	type: data.type,
        msg: data.msg
      });
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $rootScope.$on('ALERT', function(event, data){
    	$scope.addAlert(data);
    });

  });