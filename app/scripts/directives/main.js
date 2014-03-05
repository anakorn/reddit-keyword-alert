'use strict';

angular.module('rkaDirectives')

.directive('rkaFeed', function() {
  return {
    restrict: 'EA',
    scope: {
      feed: '=',
      deleteFeed: '&'
    },
    templateUrl: 'views/templates/feed.html'
  };
})

.directive('rkaAddFeedForm', ['Feeds', function(Feeds) {
  return {
    restrict: 'E',
    replace: true,
    link: function(scope) {
      scope.addFeed = function() {
        var feed = Feeds.add(scope.newFeedName, {});

        if (feed) {
          // Reset feed name form box
          scope.newFeedName = '';
        }
      };
    },
    templateUrl: 'views/templates/add-feed-form.html'
  };
}]);