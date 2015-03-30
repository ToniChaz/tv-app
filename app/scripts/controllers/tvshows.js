'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:TvshowsCtrl
 * @description
 * # TvshowsCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('TvshowsCtrl', function($scope, $rootScope, TvFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tv = TvFactory;
    
    $scope.tv.getShows();

    $scope.deleteShow = function(id, index) {
      $scope.tv.deleteShow(id, function(response) {
        if (response.status === 'deleted') {
          TvFactory.data.splice(index, 1);
        };        
      });
    }

    $scope.updateShow = function(show) {
      var data = {
        show: show,
        callback: onUpdateShow
      };
      $rootScope.$emit('MODAL', data)
    }

    function onUpdateShow(show) {
      $scope.tv.updateShow(show._id, show, function(response) {
        if (response.status === 'updated') {
          var data = {
            type: 'success',
            msg: 'Well done! Your show has updated successfully!'
          }
          $rootScope.$emit('ALERT', data);
        };
      });
    }

  });