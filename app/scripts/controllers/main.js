'use strict';

angular.module('rkaControllers')

.controller('UserCtrl', ['$scope', 'UserData', function($scope, UserData) {
  $scope.user = UserData;
  $scope.feeds = UserData.feeds;
}])

.controller('MainCtrl', ['$scope', 'Reddit', 'UserData', function($scope, Reddit, UserData) {
  $scope.user = UserData;
  $scope.feeds = UserData.feeds;
  $scope.submissions = {};

  angular.forEach(UserData.feeds, function(feed) {
    Reddit.get({ subreddit: feed.sr, type: feed.type }, function(result) {
      $scope.submissions[feed.sr] = result.data.children;
    });
  });

  angular.forEach(UserData.feeds, function(feed) {
    $scope.$watch(function() { return feed; }, function(updatedFeed) {
      console.log(updatedFeed);
      Reddit.get({ subreddit: updatedFeed.sr, type: updatedFeed.type }, function(result) {
        $scope.submissions[updatedFeed.sr] = result.data.children;
      });
    }, true);
  });
}]);
