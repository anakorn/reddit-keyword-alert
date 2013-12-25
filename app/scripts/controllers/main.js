'use strict';

var rkaControllers = angular.module('rkaControllers', [
  'rkaServices'
]);

rkaControllers.controller('MainCtrl', ['$scope', '$routeParams', 'Reddit', function ($scope, $routeParams, Reddit) {
  Reddit.get({ subreddit: 'AdoptMyVillager', type: 'new' }, function(result) {
    $scope.subs = result.data.children;
  });
}]);
