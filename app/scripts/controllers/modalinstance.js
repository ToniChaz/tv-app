'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:ModalInstanceCtrl
 * @description
 * # ModalInstanceCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('ModalInstanceCtrl', function($scope, $modalInstance, show) {
  	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.show = show;

    $scope.ok = function() {
      $modalInstance.close($scope.show);
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };
  });