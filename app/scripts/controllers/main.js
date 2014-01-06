'use strict';

angular.module('rkaControllers')

.controller('MainCtrl', ['$scope', 'Reddit', 'UserData', function ($scope, Reddit, UserData) {
  $scope.feeds = UserData.feeds;
  angular.forEach(UserData.feeds, function(feed) {
    Reddit.get({ subreddit: feed.sr, type: feed.type }, function(result) {
      feed.submissions = result.data.children;
    });
  });
}]);
