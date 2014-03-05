'use strict';

describe('rka controllers', function() {

  // load the controller's module
  beforeEach(module('rkaControllers'));

  var scope;

  xdescribe('MainCtrl', function() {
    var MainCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });
    }));

  });

  describe('UserCtrl', function() {
    var UserCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      UserCtrl = $controller('UserCtrl', {
        $scope: scope
      });
    }));

    it('should allow adding feeds', function() {
      scope.addFeed('pugs');
      expect(scope.feeds.size()).toBe(1);
    });

  });



  // it('should reflect changes in Feeds', function() {
  // Feeds.add('GameDeals', {
  //   type: 'new'
  // });

  // Feeds.add('adoptMyVillager', {
  //   type: 'new',
  //   optionsShown: false,
  //   expanded: false,
  //   numCommentsShown: true
  // });

  //   expect(scope.feeds.size()).toBe(2);
  //   scope.feeds.add('pugs', {});
  //   expect(scope.feeds.size()).toBe(3);
  // });

});
