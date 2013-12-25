'use strict';

xdescribe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('rka'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should retrieve 25 reddit submissions asynchronously', function() {

    waitsFor(function() {
      return typeof(scope.subs) != 'undefined';
    }, 'scope.subs should be defined', 5000);

    runs(function() {
      expect(scope.subs.length).toBe(25);
    });

  });
});

describe('Service: Reddit', function() {

  // load service
  beforeEach(module('rkaServices'));

  var Reddit,
    subs;

  beforeEach(function() {
    var $injector = angular.injector(['rkaServices']);
    Reddit = $injector.get('Reddit');
  });
  // beforeEach(inject(function(_Reddit_) {
  //   Reddit = _Reddit_;
  //   subs = undefined;
  // }));

  it('should retrieve 25 reddit submissions async', function() {

    Reddit.get({ subreddit: 'AdoptMyVillager', type: 'new' }, function(result) {
      subs = result.data.children;
    });

    waitsFor(function() {
      return typeof(subs) != 'undefined';
    }, 'subs should be defined', 5000);

    runs(function() {
      expect(subs.length).toBe(25);
    });

  });
});