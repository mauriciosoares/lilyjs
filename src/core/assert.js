;(function(root) {
  'use strict';

  var Assert = function() {

  };

  Assert.prototype.assert = function(value) {
    this.firstValue = value;

    return this;
  };

  root.Assert = Assert;
} (this));
