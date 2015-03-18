'use strict';

/**
 * @ngdoc function
 * @name tvAppApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the tvAppApp
 */
angular.module('testAngularApp')
  .controller('ModalCtrl', function($scope, $rootScope, $modal, $log) {
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
      }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    });

  });