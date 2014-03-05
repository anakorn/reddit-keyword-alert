'use strict';

angular.module('rkaServices')

.factory('UpdateFeed', ['$resource', function($resource) {
  return function(feed) {
    var redditApi = $resource('http://www.reddit.com/r/:subreddit/:type.json');
    redditApi.get({ subreddit: feed.sr, type: feed.options.type },
      function(result) {
        feed.submissions = result.data.children;
        console.log('UPDATED:', feed.sr);
      }
    );
  };
}])

.service('Feeds', ['UpdateFeed', function(UpdateFeed) {

  /**********************
      PRIVATE MEMBERS
  **********************/

  // Feed class constructor
  function Feed(sr, options) {
    this.submissions = [];
    this.sr = sr;

    // Set default options (if not already set)
    this.options = options || {};
    this.options.type = this.options.type !== undefined ? this.options.type : 'new';
    this.options.optionsShown = this.options.optionsShown !== undefined ? this.options.optionsShown : false;
    this.options.expanded = this.options.expanded !== undefined ? this.options.expanded : true;
    this.options.numCommentsShown = this.options.numCommentsShown !== undefined ? this.options.numCommentsShown : false;

    // Toggle expansion of this feed
    this.options.toggleExpand = function() {
      if (this.expanded) {
        this.optionsShown = false;
      }
      this.expanded = !this.expanded;
    };

    // Toggle whether options are shown for this feed
    this.options.toggleOptionsShown = function() {
      this.optionsShown = !this.optionsShown;
    };

    this.update = function() {
      UpdateFeed(this);
    };
  }

  function feedExists(sr) {
    var feedsFound = feeds.filter(function(feed) {
      return feed.sr === sr;
    });
    return feedsFound.length !== 0;
  }

  // List of Feed objects to be tracked
  var feeds = [];

  /**********************
      PUBLIC MEMBERS
  **********************/

  // Returns the number of existing feeds
  this.size = function() {
    return feeds.length;
  };

  // Returns all feeds
  this.getAll = function() {
    return feeds;
  };

  // Returns true if feeds empty
  this.isEmpty = function() {
    return feeds.length === 0;
  };

  // Adds a feed by its name and initial cfg options
  // Returns feed if successfully added, false otherwise
  this.add = function(sr, cfg) {
    if (typeof(sr) === 'undefined' || sr.length === 0) {
      console.log('FEED NOT ADDED: No name specified.');
      return false;
    }

    if (feedExists(sr)) {
      console.log('FEED NOT ADDED: Feed already exists.');
      return false;
    }
    
    var feed = new Feed(sr, cfg);

    // Update feed as soon as it's added
    feed.update();
    
    feeds.push(feed);
    console.log('FEED ADDED:', sr);
    return feed;
  };

  // Deletes a feed by its subreddit name.
  // Returns true if successfully deleted feed, false otherwise.
  this.delete = function(sr) {
    if (typeof(sr) === 'undefined' || sr.length === 0) {
      console.log('FEED NOT REMOVED: No name specified.');
      return false;
    }

    if (!feedExists(sr)) {
      console.log('FEED NOT REMOVED: Feed does not exist');
      return false;
    }

    feeds = feeds.filter(function(feed) {
      return feed.sr !== sr;
    });
    console.log('FEED REMOVED:', sr);
  };

  this.clear = function() {
    feeds = [];
  };
}]);
