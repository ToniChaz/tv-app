'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('ModalCtrl', function($scope, $rootScope, $modal, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.show = {};
    $scope.callback = function(){};

    $rootScope.$on('MODAL', function(event, data) {
      $scope.show = data.show;
      $scope.callback = data.callback;
      var modalInstance = $modal.open({
        templateUrl: 'modalContent',
        controller: 'ModalInstanceCtrl',
        resolve: {
          show: function() {
            return $scope.show;
          }
        }
      });

      modalInstance.result.then(function(show) {
        $scope.callback(show);
      });
    });

  });