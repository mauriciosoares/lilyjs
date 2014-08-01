;(function(Assert) {
  'use strict';

  Assert.prototype.toEqual = function(val) {
    return this.assertVal === val;
  };
} (this.Assert));
