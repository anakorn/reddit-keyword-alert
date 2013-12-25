'use strict';

angular.module('rka', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'rkaServices',
  'rkaControllers'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
