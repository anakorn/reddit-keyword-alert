'use strict';

xdescribe('Service: Feeds', function() {

  var Feeds;

  beforeEach(module('rkaServices'));

  beforeEach(inject(function(_Feeds_) {
    Feeds = _Feeds_;
  }));

  afterEach(function() {
    Feeds.clear();
  });

  it('should be able to clear feeds', function() {
    Feeds.add('newSub', {});
    expect(Feeds.size()).toBe(1);
    Feeds.clear();
    expect(Feeds.size()).toBe(0);
  });

  it('should be able to add feeds', function() {
    Feeds.add('newSub', {});
    Feeds.add('GameDeals', {
      type: 'new'
    });

    Feeds.add('adoptMyVillager', {
      type: 'new',
      optionsShown: false,
      expanded: false,
      numCommentsShown: true
    });
    expect(Feeds.size()).toBe(3);
  });

  it('should persist between service calls', function() {
    Feeds.add('newSub', {});
    inject(function(Feeds) {
      Feeds = Feeds;
    });
    expect(Feeds.isEmpty()).toBe(false);
  });

});