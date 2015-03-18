'use strict';

/**
 * @ngdoc function
 * @name tvAppApp.controller:ModalinstanceCtrl
 * @description
 * # ModalinstanceCtrl
 * Controller of the tvAppApp
 */
angular.module('testAngularApp')
  .controller('ModalInstanceCtrl', function($scope, $modalInstance, show) {
    $scope.show = show;

    $scope.ok = function() {
      $modalInstance.close($scope.show);
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };
  });