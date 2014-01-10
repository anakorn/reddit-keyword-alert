'use strict';

angular.module('rkaControllers')

.controller('UserCtrl', ['$scope', 'UserData', function($scope, UserData) {
  $scope.user = UserData;
  $scope.feeds = UserData.feeds;
}])

.controller('MainCtrl', ['$scope', 'FeedUpdater', 'UserData', function($scope, FeedUpdater, UserData) {
  $scope.user = UserData;
  $scope.feeds = UserData.feeds;

  angular.forEach(UserData.feeds, function(feed) {
    $scope.$watch(function() { return feed.sr; }, function(updatedFeed) {
      FeedUpdater(feed);
    }, true);
  });
}]);
