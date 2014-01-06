'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('rkaServices'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  // it('should retrieve 25 reddit submissions asynchronously', function() {

  //   waitsFor(function() {
  //     return typeof(scope.subs) != 'undefined';
  //   }, 'scope.subs should be defined', 5000);

  //   runs(function() {
  //     expect(scope.subs.length).toBe(25);
  //   });

  // });
});
