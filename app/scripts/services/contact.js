'use strict';

/**
 * @ngdoc service
 * @name testAngularApp.Contact
 * @description
 * # Contact
 * Factory in the testAngularApp.
 */
angular.module('testAngularApp')
  .factory('Contact', function($http, ENV) {

    var Contact = {};

    Contact.getEmail = function() {
      $http.get(
        ENV.apiEndpoint + '/email'
      ).success(function(data, status, headers, config) {
        Contact.data = data;
      }).error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
    };

    Contact.addEmail = function(email, callback) {
      $http.post(
        ENV.apiEndpoint + '/email', 
        { "email": email }
      ).success(function(data, status, headers, config) {
        callback();
      }).error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
    };

    // Return factory
    return Contact;
  });