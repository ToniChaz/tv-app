'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:AddshowCtrl
 * @description
 * # AddshowCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('AddshowCtrl', function($scope, TvFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tv = TvFactory;

    $scope.submit = function() {

      var show = $scope.show;

      $scope.tv.addShows(show, function(response) {

        var data;

        if (response.status === 'added') {
          data = {
            type: 'success',
            msg: 'Well done! Your show has added successfully!'
          };
        } else {
          data = {
            type: 'success',
            msg: 'Oh snap! Something has gone wrong!'
          };
        }

        $scope.$broadcast('ALERT', data);

      });

      $scope.show = null;
    };

  });