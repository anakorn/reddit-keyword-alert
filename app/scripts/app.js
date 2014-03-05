'use strict';

angular.module('rkaServices', [
  'ngResource'
]);

angular.module('rkaControllers', [
  'rkaServices'
]);

angular.module('rkaDirectives', ['ui.bootstrap']);

angular.module('rkaFilters', []);

angular.module('rka', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'rkaControllers',
  'rkaDirectives'
]);