'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('HeaderCtrl', function($scope, $location) {
    $scope.isActive = function(url) {
      if (url === $location.path()) {
        return 'active';
      }
    };
  });