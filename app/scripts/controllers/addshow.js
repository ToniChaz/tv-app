'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:AddshowCtrl
 * @description
 * # AddshowCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('AddshowCtrl', function($scope, $rootScope, TvFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tv = TvFactory;

    $scope.submit = function(show) {
      $scope.tv.addShows(show, function(response) {
        if (response.status === 'added') {
          var data = {
            type: 'success',
            msg: 'Well done! Your show has added successfully!'
          }
          $rootScope.$emit('ALERT', data);
        } else {
          var data = {
            type: 'success',
            msg: 'Oh snap! Something has gone wrong!'
          }
          $rootScope.$emit('ALERT', data);
        };
      });
      $scope.show = null
    }

  });