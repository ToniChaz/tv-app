'use strict';

/**
 * @ngdoc overview
 * @name testAngularApp
 * @description
 * # testAngularApp
 *
 * Main module of the application.
 */
angular
  .module('testAngularApp', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'config',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tvshows', {
        templateUrl: 'views/tvshows.html',
        controller: 'TvshowsCtrl'
      })
      .when('/addshow', {
        templateUrl: 'views/addshow.html',
        controller: 'AddshowCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });