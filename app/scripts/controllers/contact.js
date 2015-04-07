'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('ContactCtrl', function ($scope, Contact) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.contact = Contact;

    $scope.submit = function(){
    	$scope.contact.addEmail($scope.email, function(){
    		$scope.contact.getEmail();
    		$scope.email = '';
    	});
    };

  });
 
