'use strict';

var rkaServices = angular.module('rkaServices', [
  'ngResource'
]);

rkaServices.factory('Reddit', ['$resource',
  function($resource) {
    return $resource('http://www.reddit.com/r/:subreddit/:type.json', {}, {
      query: { method: 'GET', isArray: true }
    });
  }
]);