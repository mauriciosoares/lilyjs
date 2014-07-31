;(function(root) {
  'use strict';

  var Assert = function(value) {
    if(!(this instanceof Assert)) {
      return new Assert(value);
    }

    this.firstValue = value;

    return this;
  };

  Assert.prototype.toBe = function(value) {

  };

  root.Assert = Assert;
} (this));