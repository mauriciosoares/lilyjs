;(function(Assert) {
  'use strict';

  Assert.prototype.toEqual = function(val) {
    console.log(this.lily);
    return this.assertVal === val;
  };
} (this.Assert));
