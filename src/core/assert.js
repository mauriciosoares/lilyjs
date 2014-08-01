;(function(root) {
  'use strict';

  var Assert = function() {

  };

  Assert.prototype.assert = function(val) {
    this.assertVal = val;

    return this;
  };

  root.Assert = Assert;
} (this));
