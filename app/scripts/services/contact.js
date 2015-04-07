'use strict';

/**
 * @ngdoc service
 * @name testAngularApp.Contact
 * @description
 * # Contact
 * Factory in the testAngularApp.
 */
angular.module('testAngularApp')
  .factory('Contact', function($http, $log, ENV) {

    var Contact = {};

    Contact.getEmail = function() {
      $http.get(
        ENV.apiEndpoint + '/email'
      ).success(function(data, status, headers, config) {
        var result = [];
        result.push(data);
        result.push(status);
        result.push(headers);
        result.push(config);
        $log.log(result);
        Contact.data = result[0];
      }).error(function(data, status, headers, config) {
        var result = [];
        result.push(data);
        result.push(status);
        result.push(headers);
        result.push(config);
        $log.log(result);
      });
    };

    Contact.addEmail = function(email, callback) {
      $http.post(
        ENV.apiEndpoint + '/email', 
        { 'email': email }
      ).success(function(data, status, headers, config) {
        var result = [];
        result.push(data);
        result.push(status);
        result.push(headers);
        result.push(config);
        $log.log(result);
        callback();
      }).error(function(data, status, headers, config) {
        var result = [];
        result.push(data);
        result.push(status);
        result.push(headers);
        result.push(config);
        $log.log(result);
      });
    };

    // Return factory
    return Contact;
  });