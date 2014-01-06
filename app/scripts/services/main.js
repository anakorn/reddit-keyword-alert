'use strict';

angular.module('rkaServices')

.factory('Reddit', ['$resource', function($resource) {
  return $resource('http://www.reddit.com/r/:subreddit/:type.json');
}])

.service('UserData', function() {
  this.feeds = [
    {
      sr: 'adoptMyVillager',
      type: 'new'
    },
    {
      sr: 'nba',
      type: 'hot'
    }
  ];
});