'use strict';

angular.module('rkaServices', [
  'ngResource'
]);

angular.module('rkaControllers', [
  'rkaServices'
]);

angular.module('rkaFilters', []);

angular.module('rka', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'rkaServices',
  'rkaControllers'
]);