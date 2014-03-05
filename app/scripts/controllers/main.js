'use strict';

angular.module('rkaControllers')

// Hooks user's feeds to the main page
.controller('MainCtrl', ['$scope', '$interval', 'Feeds', function($scope, $interval, Feeds) {
  $scope.feeds = Feeds;
  $interval(function() {
    angular.forEach($scope.feeds.getAll(), function(feed) {
      feed.update();
    });
  }, 10000);
}]);
