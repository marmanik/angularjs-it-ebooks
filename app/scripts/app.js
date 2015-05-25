'use strict';

/**
 * @ngdoc overview
 * @name cbooksApp
 * @description
 * # cbooksApp
 *
 * Main module of the application.
 */
angular
  .module('cbooksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ]).value('appSettings', {
    title: 'IT Books Application',
    copyrights: 'Reproduction of site books is authorized only for informative purposes and strictly for personal, private use.',
    version: '1.0'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/bookDetails/:bookId', {
        templateUrl: 'views/bookdetails.html',
        controller: 'BookDetailsCtrl'
      })
      .when('/search/:query', {
        controller: 'MainCtrl',
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
