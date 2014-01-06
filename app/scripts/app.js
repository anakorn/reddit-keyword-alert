'use strict';

angular.module('rkaServices', [
  'ngResource'
]);

angular.module('rkaControllers', [
  'rkaServices'
]);

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
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
