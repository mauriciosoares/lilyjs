;(function(root) {
  'use strict';

  var Assert = function() {

  };

  Assert.prototype.expect = function(value) {
    this.firstValue = value;
    return this;
  };

  Assert.prototype.toBe = function(value) {

  };

  root.Assert = Assert;
} (this));